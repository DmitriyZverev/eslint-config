import eslintConfigPrettier from 'eslint-config-prettier';
import type {Linter} from 'eslint';

// `curly` is compatible with Prettier when used with the default `all` option.
const {curly, ...rules} = eslintConfigPrettier.rules;

/**
 * Config that turns off rules conflicting with Prettier.
 *
 * @remarks
 * It must be placed after all other configs to turn off the rules enabled by them.
 *
 * @public
 */
export const prettierConfig: Linter.Config[] = [
    {
        rules,
    },
];
