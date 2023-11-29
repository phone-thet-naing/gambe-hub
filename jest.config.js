export default {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass|jpg)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(js|jsx|mjs|cjs)$': ['babel-jest', { configFile: './babel.config.cjs' }],
    }
};