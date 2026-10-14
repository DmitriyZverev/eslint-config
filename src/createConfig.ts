import type {Linter} from 'eslint';

import {config} from './index.js';
import {prettierConfig} from './prettier.js';
import {reactConfig} from './react.js';

/**
 * Options of {@link createConfig}.
 *
 * @public
 */
export interface CreateConfigOptions {
    /**
     * Whether to include {@link reactConfig}.
     *
     * @defaultValue `false`
     */
    react?: boolean;

    /**
     * Configs of the project.
     *
     * @remarks
     * They are placed after the package configs, so they can override them, and before {@link prettierConfig}, so
     * rules conflicting with Prettier are turned off in them too.
     *
     * @defaultValue `[]`
     */
    configs?: Linter.Config[];
}

/**
 * Creates the ESLint config.
 *
 * @remarks
 * The result consists of the following configs in this order:
 *
 * 1. {@link config};
 * 2. {@link reactConfig}, if {@link CreateConfigOptions.react} is `true`;
 * 3. {@link CreateConfigOptions.configs};
 * 4. {@link prettierConfig}.
 *
 * @example
 * ```js
 * // eslint.config.js
 * import {createConfig} from '@dmitriyzverev/eslint-config';
 *
 * export default createConfig({
 *     react: true,
 *     configs: [
 *         {
 *             rules: {
 *                 'no-console': 'off',
 *             },
 *         },
 *     ],
 * });
 * ```
 *
 * @returns The config to export from `eslint.config.js`.
 *
 * @public
 */
export function createConfig({react = false, configs = []}: CreateConfigOptions = {}): Linter.Config[] {
    return [...config, ...(react ? reactConfig : []), ...configs, ...prettierConfig];
}
