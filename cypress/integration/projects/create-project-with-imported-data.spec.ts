import { ProjectDomainLanguageFactory } from '../../src/domain-languages/projects/ProjectDomainLanguageFactory';
import { GoogleAuthenticatorCredentials } from '../../src/drivers/authenticator/GoogleAuthenticatorCredentials';

describe('Create Project Test Suite', () => {
    const host = Cypress.env('HOST');
    const credentials = new GoogleAuthenticatorCredentials({
        grantType: 'refresh_token',
        clientId: Cypress.env('GOOGLE_CLIENT_ID'),
        clientSecret: Cypress.env('GOOGLE_CLIENT_SECRET'),
        refreshToken: Cypress.env('GOOGLE_REFRESH_TOKEN'),
    });
    const domainLangaugeFactory = new ProjectDomainLanguageFactory(
        host,
        credentials
    );
    const projects = domainLangaugeFactory.buildDomainLanguage();

    it('When user authenticates and creates a project it should fill the form and display the project in the list', async () => {
        await projects.navigateToProjects();

        await projects.createProjectWithImportedData();

        projects.assertProjectCreated();
    });
});
