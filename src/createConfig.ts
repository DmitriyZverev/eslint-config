import type {Linter} from 'eslint';

import {config} from './index.js';
import {prettierConfig} from './prettier.js';
import {reactConfig} from './react.js';

export interface CreateConfigOptions {
    react?: boolean;
    configs?: Linter.Config[];
}

export function createConfig({react = false, configs = []}: CreateConfigOptions = {}): Linter.Config[] {
    return [...config, ...(react ? reactConfig : []), ...configs, ...prettierConfig];
}
