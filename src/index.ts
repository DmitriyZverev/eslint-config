import stylisticPlugin from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import type {Linter, ESLint} from 'eslint';

import {files} from './files.js';

/**
 * Base config for JavaScript and TypeScript files.
 *
 * @remarks
 * Applies to `.js`, `.jsx`, `.mjs`, `.cjs`, `.ts`, `.tsx`, `.mts` and `.cts` files and supports TypeScript syntax.
 * `languageOptions.parserOptions` are passed to `@typescript-eslint/parser`.
 *
 * Use {@link createConfig} to get the complete config. Use this config only to compose the complete config manually.
 *
 * @example
 * ```js
 * // eslint.config.js
 * import {config, prettierConfig, reactConfig} from '@dmitriyzverev/eslint-config';
 *
 * export default [...config, ...reactConfig, ...projectConfigs, ...prettierConfig];
 * ```
 *
 * @public
 */
export const config: Linter.Config[] = [
    {
        files,
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            '@stylistic': stylisticPlugin as ESLint.Plugin,
            import: importPlugin,
        },
        rules: {
            'constructor-super': 'error',
            curly: 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            'default-param-last': 'error',
            'dot-notation': 'error',
            eqeqeq: ['error', 'always'],
            'func-names': ['error', 'as-needed'],
            'func-style': [
                'error',
                'declaration',
                {
                    allowArrowFunctions: true,
                },
            ],
            'guard-for-in': 'error',
            'id-length': [
                'error',
                {
                    exceptions: ['e', 'i', 'j', 'x', 'y', 'z', '_', '$'],
                },
            ],
            'max-lines': 'error',
            'max-params': 'error',
            'no-array-constructor': 'error',
            'no-async-promise-executor': 'error',
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': ['error', 'always'],
            'no-console': 'error',
            'no-const-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': [
                'error',
                {
                    checkLoops: false,
                },
            ],

            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty': [
                'error',
                {
                    allowEmptyCatch: true,
                },
            ],
            'no-empty-character-class': 'error',
            'no-empty-function': 'error',
            'no-empty-pattern': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-ex-assign': 'error',
            'no-extra-boolean-cast': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-import-assign': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-label-var': 'error',
            'no-labels': 'error',
            'no-misleading-character-class': 'error',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-new-func': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-new-wrappers': 'error',
            'no-obj-calls': 'error',
            'no-object-constructor': 'error',
            'no-octal': 'error',
            'no-param-reassign': 'error',
            'no-promise-executor-return': 'error',
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-redeclare': 'error',
            'no-regex-spaces': 'error',
            'no-return-assign': ['error', 'always'],
            'no-script-url': 'error',
            'no-self-assign': 'error',
            'no-setter-return': 'error',
            'no-sparse-arrays': 'error',
            'no-this-before-super': 'error',
            'no-underscore-dangle': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unused-labels': 'error',
            'no-useless-catch': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-with': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'require-yield': 'error',
            'use-isnan': 'error',

            '@stylistic/lines-between-class-members': [
                'error',
                'always',
                {
                    exceptAfterOverload: true,
                    exceptAfterSingleLine: false,
                },
            ],

            'import/first': 'error',
            'import/no-amd': 'error',
            'import/no-default-export': 'error',
            'import/no-webpack-loader-syntax': 'error',
            'import/order': [
                'error',
                {
                    'newlines-between': 'always',
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                },
            ],
        },
    },
];
