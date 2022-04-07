import { IAuthenticationDomainLanguage } from '../src/domain-languages/authentication/IAuthenticationDomainLanguage';
import { isDevelopment } from '../support';

if (isDevelopment()) {
    describe('Google Login Acceptance Test Suite', () => {
        let authentication: IAuthenticationDomainLanguage;

        it('When user clicks login button it should get token, display success, and redirect', async () => {
            authentication.selectAuthenticationProcess();

            await authentication.authenticate();

            authentication.assertAuthenticationWasSuccessful();
        });
    });
}
