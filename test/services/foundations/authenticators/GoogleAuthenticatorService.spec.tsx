import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AccessToken } from '../../../../src/models/authenticators/AccessToken';
import { GoogleAuthenticatorService } from '../../../../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { FakeFailedGoogleAuthenticationComponent } from './fakes/FakeFailedGoogleAuthenticationComponent';
import { FakeSuccessfulGoogleAuthenticationComponent } from './fakes/FakeSucessfulGoogleAuthenticationComponent';

describe('Google Authentication Service Test Suite', () => {
    test('Should create a google authenticator that succeeds on click', () => {
        const service = new GoogleAuthenticatorService(
            '',
            '',
            '',
            FakeSuccessfulGoogleAuthenticationComponent
        );
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        render(service.createAuthenticator(onSuccess, onFailure));
        const text = screen.getByText('Login With Google');
        fireEvent.click(text);

        expect(text).toBeInTheDocument();
        expect(onSuccess).toBeCalled();
        expect(onSuccess).toBeCalledWith(expect.any(AccessToken));
        expect(onFailure).not.toBeCalled();
    });

    test('Should create a google authenticator that fails on click', () => {
        const service = new GoogleAuthenticatorService(
            '',
            '',
            '',
            FakeFailedGoogleAuthenticationComponent
        );
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        render(service.createAuthenticator(onSuccess, onFailure));
        const text = screen.getByText('Login With Google');
        fireEvent.click(text);

        expect(text).toBeInTheDocument();
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).toBeCalledWith(expect.any(Error));
        expect(onFailure).toBeCalled();
    });
});
