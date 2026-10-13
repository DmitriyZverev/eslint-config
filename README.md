# @dmitriyzverev/eslint-config

_The [ESLint](https://eslint.org/) configuration that uses in my packages_

---

## Usage

1. Install dependencies:

    ```bash
    npm i eslint typescript @dmitriyzverev/eslint-config
    ```

2. Configure `.eslintrc` file:

    ```json
    {
        "extends": ["@dmitriyzverev/eslint-config"],
        "parserOptions": {
            "sourceType": "module",
            "project": ["path/to/your/tsconfig.json"]
        }
    }
    ```

3. Run [ESLint](https://eslint.org/):
    ```bash
    npx eslint
    ```

### Usage with React

Configure `.eslintrc` file:

```json
{
    "extends": [
        "@dmitriyzverev/eslint-config",
        "@dmitriyzverev/eslint-config/react"
    ],
    "parserOptions": {
        "sourceType": "module",
        "project": ["path/to/your/tsconfig.json"]
    }
}
```
