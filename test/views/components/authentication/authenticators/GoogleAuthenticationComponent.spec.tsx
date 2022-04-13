import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GoogleAuthenticationComponent } from '../../../../../src/views/components/authentication/authenticators/GoogleAuthenticatorComponent';

describe('Google Authentication Component Test Suite', () => {
    test('Should render the text', () => {
        render(
            <GoogleAuthenticationComponent
                clientId=""
                scope=""
                cookiePolicy=""
                onSuccess={() => {}}
                onFailure={() => {}}
            >
                Login With Google
            </GoogleAuthenticationComponent>
        );

        const element = screen.getByText('Login With Google');

        expect(element).toBeInTheDocument();
    });
});
