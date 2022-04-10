import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { instance, mock, reset } from 'ts-mockito';
import { IAuthenticatorService } from '../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { AuthenticationPage } from '../../../../src/views/pages/authentication/AuthenticationPage';

describe('Authentication Page Test Suite', () => {
    const mockedService = mock<IAuthenticatorService>();
    const service = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('Should render the authentication page with the google authenticator', () => {
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
});
