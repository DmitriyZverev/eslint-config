import eslintConfigPrettier from 'eslint-config-prettier';
import type {Linter} from 'eslint';

// `curly` is compatible with Prettier when used with the default `all` option.
const {curly, ...rules} = eslintConfigPrettier.rules;

export const prettierConfig: Linter.Config[] = [
    {
        rules,
    },
];
