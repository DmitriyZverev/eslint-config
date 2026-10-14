import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type {Linter} from 'eslint';

import {files} from './files.js';

export const reactConfig: Linter.Config[] = [
    {
        files,
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'function-expression',
                },
            ],
            'react/jsx-boolean-value': ['error', 'always'],
            'react/jsx-filename-extension': [
                'error',
                {
                    allow: 'as-needed',
                    extensions: ['.jsx', '.tsx'],
                },
            ],
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-no-undef': 'error',
            'react/jsx-curly-brace-presence': ['error', 'never'],
            'react/jsx-pascal-case': [
                'error',
                {
                    allowAllCaps: true,
                },
            ],
            'react/jsx-fragments': 'error',
            'react/jsx-uses-vars': 'error',
            'react/no-access-state-in-setstate': 'error',
            'react/no-children-prop': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-deprecated': 'error',
            'react/no-direct-mutation-state': 'error',
            'react/no-find-dom-node': 'error',
            'react/no-is-mounted': 'error',
            'react/no-string-refs': 'error',
            'react/no-redundant-should-component-update': 'error',
            'react/no-render-return-value': 'error',
            'react/no-this-in-sfc': 'error',
            'react/no-unsafe': 'error',
            'react/react-in-jsx-scope': 'error',
            'react/self-closing-comp': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
