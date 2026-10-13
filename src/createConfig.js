import {config} from './index.js';
import {prettierConfig} from './prettier.js';
import {reactConfig} from './react.js';

export function createConfig({react = false, configs = []} = {}) {
    return [...config, ...(react ? reactConfig : []), ...configs, ...prettierConfig];
}
