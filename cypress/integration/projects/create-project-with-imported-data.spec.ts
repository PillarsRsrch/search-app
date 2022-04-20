import { ProjectDomainLanguageFactory } from '../../src/domain-languages/projects/ProjectDomainLanguageFactory';
import { GoogleAuthenticatorCredentials } from '../../src/drivers/authenticator/GoogleAuthenticatorCredentials';
import { isDevelopment } from '../../support';

if (isDevelopment()) {
    describe('Google Login Acceptance Test Suite', () => {
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

        it('When user clicks login button it should get token, display success, and redirect', async () => {
            const file = {};
            await projects.navigateToProjects();

            await projects.createProjectWithImportedData(file);

            projects.assertProjectCreated();
        });
    });
}
