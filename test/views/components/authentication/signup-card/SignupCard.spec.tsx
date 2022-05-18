import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {
    anyString,
    anything,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { AccessToken } from '../../../../../src/models/authenticators/AccessToken';
import { Cookie } from '../../../../../src/models/storage/Cookie';
import { IAuthenticatorService } from '../../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { ICookieService } from '../../../../../src/services/foundations/cookies/ICookieService';
import { IIconService } from '../../../../../src/services/foundations/icons/IIconService';
import { SignUpCard } from '../../../../../src/views/components/authentications/signup-card/SignUpCard';
import { FailureAuthenticator } from '../fakes/FailureAuthenticator';
import { SuccessAuthenticator } from '../fakes/SuccessAuthenticator';

describe('Sign Up Card Test Suite', () => {
    const mockedAuthenticatorService = mock<IAuthenticatorService>();
    const mockedIconService = mock<IIconService>();
    const mockedCookieService = mock<ICookieService>();
    const signupListener = jest.fn();
    const authenticatorService = instance(mockedAuthenticatorService);
    const iconService = instance(mockedIconService);
    const cookieService = instance(mockedCookieService);

    beforeEach(() => {
        reset(mockedAuthenticatorService);
        reset(mockedIconService);
        reset(mockedCookieService);
        signupListener.mockClear();
    });

    test('Should render the signup card', () => {
        const { container: page } = render(
            <SignUpCard
                onSignUp={signupListener}
                cookieService={cookieService}
                iconService={iconService}
                authenticatorService={authenticatorService}
            />
        );

        const text = screen.getByText(
            'Sign up to start modernizing your research'
        );
        const button = page.getElementsByClassName('authentication-button')[0];

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(signupListener).not.toBeCalled();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedCookieService.getAllCookies()).never();
        verify(mockedIconService.getIcon(anyString())).never();
    });

    test('Should redirect to projects page if the access token is already set and valid', () => {
        when(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).thenCall((onSuccess, onFailure) => (
            <FailureAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        when(mockedCookieService.getAllCookies()).thenReturn([
            new Cookie('access-token', ''),
        ]);
        render(
            <SignUpCard
                onSignUp={signupListener}
                cookieService={cookieService}
                iconService={iconService}
                authenticatorService={authenticatorService}
            />
        );

        const button = screen.getByText('Failure');
        fireEvent.click(button);

        expect(signupListener).toBeCalled();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedCookieService.getAllCookies()).once();
        verify(mockedIconService.getIcon(anyString())).once();
    });

    test('Should render the successful authentication message when the authenticator succeeds and transition pages', async () => {
        when(mockedCookieService.getAllCookies()).thenReturn([]);
        when(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).thenCall((onSuccess, onFailure) => (
            <SuccessAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        const { container } = render(
            <SignUpCard
                onSignUp={signupListener}
                authenticatorService={authenticatorService}
                cookieService={cookieService}
                iconService={iconService}
            />
        );
        const button = screen.getByText('Success');
        fireEvent.click(button);

        const successText = screen.getByText('Successfully authenticated');
        const successIcon = container.getElementsByClassName('icon')[0];

        expect(successText).toBeInTheDocument();
        expect(successIcon).toBeInTheDocument();
        expect(signupListener).toBeCalled();
        expect(signupListener).toBeCalledWith(expect.any(AccessToken));
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedCookieService.getAllCookies()).once();
        verify(mockedIconService.getIcon(anyString())).once();
    });

    test('Should render the failure authentication message when the authenticator fails', () => {
        when(mockedCookieService.getAllCookies()).thenReturn([]);
        when(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).thenCall((onSuccess, onFailure) => (
            <FailureAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        const { container } = render(
            <SignUpCard
                cookieService={cookieService}
                onSignUp={signupListener}
                authenticatorService={authenticatorService}
                iconService={iconService}
            />
        );
        const button = screen.getByText('Failure');
        fireEvent.click(button);

        const failureText = screen.getByText('Failed to authenticate');
        const failureIcon = container.getElementsByClassName('icon')[0];

        expect(failureText).toBeInTheDocument();
        expect(failureIcon).toBeInTheDocument();
        expect(signupListener).not.toBeCalled();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedCookieService.getAllCookies()).once();
        verify(mockedIconService.getIcon(anyString())).once();
    });
});
