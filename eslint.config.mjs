import js from '@eslint/js'; 
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals'; // Импортируем пакет globals

export default [
    js.configs.recommended,
   
    {
        files: ['**/*.js', '**/*.jsx'], 
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser, // Используем глобальные переменные для браузера
                ...globals.node,    // Используем глобальные переменные для Node.js
                console: 'readonly', // Разрешение на использование console
                debugger: 'readonly', // Разрешение на использование debugger
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
            'no-debugger': 'off', // Отключение правила no-debugger
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];