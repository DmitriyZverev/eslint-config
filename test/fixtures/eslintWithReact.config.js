import {createConfig} from '../../.package/index.js';

export default createConfig({
    react: true,
    configs: [
        {
            languageOptions: {
                parserOptions: {
                    project: ['./tsconfig.json'],
                    tsconfigRootDir: import.meta.dirname,
                },
            },
        },
        {
            files: ['**/*.foo'],
            languageOptions: {
                sourceType: 'module',
            },
        },
        {
            rules: {
                // A custom rule conflicting with Prettier: `createConfig` must turn it off after custom configs.
                // `src/label.tsx` violates it, so any report there means the Prettier config is applied too early.
                'react/jsx-one-expression-per-line': 'error',
            },
        },
    ],
});
