import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {describe, it} from 'node:test';
import {fileURLToPath} from 'node:url';

import {ESLint} from 'eslint';
import stringify from 'json-stringify-pretty-compact';

const fixturesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');

const fileNames = ['file.js', 'file.jsx', 'file.mjs', 'file.cjs', 'file.ts', 'file.tsx', 'file.mts', 'file.cts'];

function createESLint(configFileName) {
    return new ESLint({
        cwd: fixturesDir,
        overrideConfigFile: path.join(fixturesDir, configFileName),
    });
}

async function getEffectiveConfig(eslint) {
    const configs = await Promise.all(fileNames.map((fileName) => eslint.calculateConfigForFile(fileName)));
    return Object.fromEntries(
        configs.map(({languageOptions: {sourceType, parser}, settings, rules}, index) => [
            fileNames[index],
            {
                languageOptions: {sourceType, parser: parser.meta.name},
                settings,
                rules: Object.fromEntries(Object.entries(rules).filter(([, [severity]]) => severity !== 0)),
            },
        ]),
    );
}

describe('createConfig with React', () => {
    const eslint = createESLint('eslintWithReact.config.js');

    async function lint(fileName) {
        const [result] = await eslint.lintFiles([path.join('src', fileName)]);
        return result.messages.map((message) => message.ruleId ?? message.message);
    }

    it('uses no deprecated rules', async () => {
        const results = await eslint.lintFiles(['src']);
        assert.deepEqual(
            results.flatMap((result) => result.usedDeprecatedRules),
            [],
        );
    });

    it('matches the effective config snapshot', async (t) => {
        t.assert.snapshot(await getEffectiveConfig(eslint), {serializers: [stringify]});
    });

    it('requires blank lines between class members', async () => {
        assert.deepEqual(await lint('class.ts'), ['@stylistic/lines-between-class-members']);
    });

    it('disallows Object constructor', async () => {
        assert.deepEqual(await lint('object.ts'), ['no-object-constructor']);
    });

    it('does not apply rules outside of config files', async () => {
        assert.deepEqual(await lint('outside.foo'), []);
    });

    it('keeps curly enabled with Prettier', async () => {
        assert.deepEqual(await lint('curly.js'), ['curly']);
    });

    it('turns off rules conflicting with Prettier after custom configs', async () => {
        assert.deepEqual(await lint('label.tsx'), []);
    });

    describe('react', () => {
        it('applies React rules to JSX', async () => {
            assert.deepEqual(await lint('component.tsx'), ['react-hooks/exhaustive-deps', 'react/jsx-boolean-value']);
        });

        it('applies React rules to files without JSX', async () => {
            assert.deepEqual(await lint('hook.ts'), ['react-hooks/exhaustive-deps']);
        });
    });
});

describe('createConfig without React', () => {
    it('matches the effective config snapshot', async (t) => {
        t.assert.snapshot(await getEffectiveConfig(createESLint('eslintWithoutReact.config.js')), {
            serializers: [stringify],
        });
    });
});

describe('manually composed config', () => {
    it('matches createConfig with React', async () => {
        assert.deepEqual(
            await getEffectiveConfig(createESLint('eslintManual.config.js')),
            await getEffectiveConfig(createESLint('eslintWithReact.config.js')),
        );
    });
});

describe('config and reactConfig', () => {
    it('have no rules conflicting with Prettier', () => {
        const result = spawnSync('npx', ['--no', 'eslint-config-prettier', ...fileNames], {
            cwd: fixturesDir,
            encoding: 'utf8',
        });
        assert.equal(result.status, 0, result.stderr);
    });
});
