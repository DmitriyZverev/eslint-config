# @dmitriyzverev/eslint-config

_An [ESLint](https://eslint.org/) configuration used in packages within the
`@dmitriyzverev` scope_

---

The configuration is designed for projects formatted with
[Prettier](https://prettier.io/): it doesn't check formatting and turns off
rules conflicting with Prettier.

## Features

- Lints `.js`, `.jsx`, `.mjs`, `.cjs`, `.ts`, `.tsx`, `.mts` and `.cts` files,
  including TypeScript syntax.
- Provides optional rules for React components and hooks.
- Turns off rules conflicting with Prettier, including the rules enabled in your
  configs.

## Requirements

- ESLint `^9.7.0`. The package supports only the flat config
  (`eslint.config.js`).
- TypeScript `^4.8.4 || ^5.0.0`.

## Usage

1. Install dependencies:

    ```bash
    npm i -DE eslint@9 typescript@5 @dmitriyzverev/eslint-config
    ```

2. Configure `eslint.config.js` file:

    ```js
    import {createConfig} from '@dmitriyzverev/eslint-config';

    export default createConfig({
        react: true,
        configs: [
            {
                rules: {
                    'no-console': 'off',
                },
            },
        ],
    });
    ```

    `createConfig` places your `configs` after the package configs and turns off
    rules conflicting with Prettier at the very end.

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
    // ...
    ...prettierConfig,
];
```

Place `reactConfig` after `config`, and `prettierConfig` after all other configs
to turn off the rules conflicting with Prettier.
