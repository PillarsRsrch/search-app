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
import { IAuthenticatorService } from '../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { IIconService } from '../../../../src/services/foundations/icons/IIconService';
import { SignupCard } from '../../../../src/views/components/signup-card/SignupCard';
import { FailureAuthenticator } from '../authentication/fakes/FailureAuthenticator';
import { SuccessAuthenticator } from '../authentication/fakes/SuccessAuthenticator';

describe('Sign Up Card Test Suite', () => {
    const mockedAuthenticatorService = mock<IAuthenticatorService>();
    const mockedIconService = mock<IIconService>();
    const signupListener = jest.fn();
    const authenticatorService = instance(mockedAuthenticatorService);
    const iconService = instance(mockedIconService);

    beforeEach(() => {
        reset(mockedAuthenticatorService);
        reset(mockedIconService);
        signupListener.mockClear();
    });

    test('Should render the signup card', () => {
        const { container: page } = render(
            <SignupCard
                onSignup={signupListener}
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
        verify(mockedIconService.getIcon(anyString())).never();
    });

    test('Should render the successful authentication message when the authenticator succeeds and transition pages', async () => {
        when(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).thenCall((onSuccess, onFailure) => (
            <SuccessAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        const { container } = render(
            <SignupCard
                onSignup={signupListener}
                authenticatorService={authenticatorService}
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
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedIconService.getIcon(anyString())).once();
    });

    test('Should render the failure authentication message when the authenticator fails', () => {
        when(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).thenCall((onSuccess, onFailure) => (
            <FailureAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        const { container } = render(
            <SignupCard
                onSignup={signupListener}
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
        verify(mockedIconService.getIcon(anyString())).once();
    });
});
