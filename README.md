# @dmitriyzverev/eslint-config

_The [ESLint](https://eslint.org/) configuration that uses in my packages_

---

## Usage

1. Install dependencies:

    ```bash
    npm i eslint typescript @dmitriyzverev/eslint-config
    ```

2. Configure `eslint.config.js` file:

    ```js
    import {createConfig} from '@dmitriyzverev/eslint-config';

    export default createConfig({
        react: true,
        configs: [
            {
                languageOptions: {
                    parserOptions: {
                        project: ['path/to/your/tsconfig.json'],
                    },
                },
            },
        ],
    });
    ```

    `createConfig` places your `configs` after the package configs and turns off
    rules conflicting with [Prettier](https://prettier.io/) at the very end.

    Options:

    - `react` — include React rules, `false` by default.
    - `configs` — your config objects, `[]` by default.

3. Run [ESLint](https://eslint.org/):
    ```bash
    npx eslint
    ```

### Composing configs manually

The package configs are also available as arrays of config objects:

```js
import {
    config,
    prettierConfig,
    reactConfig,
} from '@dmitriyzverev/eslint-config';

export default [
    ...config,
    ...reactConfig,
    // your configs
    ...prettierConfig,
];
```

`prettierConfig` turns off rules conflicting with
[Prettier](https://prettier.io/), so add it after all other configs.
