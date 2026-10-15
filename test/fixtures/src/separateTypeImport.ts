import {ESLint} from 'eslint';
import type {Linter} from 'eslint';

export const createESLint = (config: Linter.Config) => new ESLint({overrideConfig: config});
