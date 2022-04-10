import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { anything, instance, mock, reset, when } from 'ts-mockito';
import { IAuthenticatorService } from '../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { AuthenticationPage } from '../../../../src/views/pages/authentication/AuthenticationPage';
import { SuccessAuthenticator } from '../../components/authenticators/fakes/SuccessAuthenticator';

describe('Authentication Page Test Suite', () => {
    const mockedService = mock<IAuthenticatorService>();
    const service = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('Should render the authentication page with an authenticator', () => {
        const { container: page } = render(
            <AuthenticationPage service={service} />
        );

        const text = screen.getByText(
            'Login with google to create a new project'
        );
        const button = page.getElementsByClassName('authentication-button')[0];

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });

    test('Should render the successful authentication message when the authenticator succeeds', () => {
        when(
            mockedService.createAuthenticator(anything(), anything())
        ).thenCall((onSuccess, onFailure) => (
            <SuccessAuthenticator onSuccess={onSuccess} onFailure={onFailure} />
        ));
        const { container } = render(<AuthenticationPage service={service} />);
        const button = screen.getByText('Success');
        fireEvent.click(button);

        const successText = screen.getByText('Successfully authenticated');
        const successIcon = container.getElementsByClassName('icon')[0];

        expect(successText).toBeInTheDocument();
        expect(successIcon).toBeInTheDocument();
    });
});
