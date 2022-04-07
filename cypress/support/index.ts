import './commands';

export function isDevelopment() {
    return Cypress.env('NODE_ENV').toLowerCase() === 'development';
}
