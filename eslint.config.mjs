import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
    tseslint.configs.strictTypeChecked,
    eslintPluginUnicorn.configs.all,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/quotes': [
                'error',
                'single'
            ],
            '@stylistic/indent': [
                'error',
                4
            ]
        }
    }
]);