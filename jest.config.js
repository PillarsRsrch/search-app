module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
    testEnvironment: 'jsdom',
};
