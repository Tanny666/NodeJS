import js from '@eslint/js'; 
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
    js.configs.recommended,
   
    {
        files: ['**/*.js', '**/*.jsx'], 
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },
        plugins: {
            import: eslintPluginImport,
            react: eslintPluginReact,
            'jsx-a11y': eslintPluginJsxA11y,
            'react-hooks': eslintPluginReactHooks,
        },
        rules: {
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];