import type {Linter} from 'eslint';
import {ESLint} from 'eslint';

export const createESLint = (config: Linter.Config) => new ESLint({overrideConfig: config});
