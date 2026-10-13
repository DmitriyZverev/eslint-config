// The `eslint-config-prettier` CLI can only use the default config lookup, so this config of the package
// configs without `prettierConfig` is named `eslint.config.js`.
import {config, reactConfig} from '@dmitriyzverev/eslint-config';

export default [...config, ...reactConfig];
