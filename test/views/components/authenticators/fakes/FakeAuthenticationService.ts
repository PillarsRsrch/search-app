import { IAuthenticatorService } from '../../../../../src/services/foundations/authenticators/IAuthenticatorService';

export abstract class FakeAuthenticatorService
    implements IAuthenticatorService
{
    handleSuccess(): void {}
    handleFailure(): void {}
}
