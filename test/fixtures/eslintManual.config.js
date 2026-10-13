import {config, prettierConfig, reactConfig} from '@dmitriyzverev/eslint-config';

export default [
    ...config,
    ...reactConfig,
    {
        rules: {
            // A custom rule conflicting with Prettier: `prettierConfig` must turn it off,
            // as `createConfig` does in `eslintWithReact.config.js`.
            'react/jsx-one-expression-per-line': 'error',
        },
    },
    ...prettierConfig,
];
