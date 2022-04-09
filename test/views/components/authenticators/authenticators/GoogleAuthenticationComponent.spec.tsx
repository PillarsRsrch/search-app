import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { instance, mock, reset } from 'ts-mockito';
import { GoogleAuthenticationComponent } from '../../../../../src/views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { FakeAuthenticatorService } from '../fakes/FakeAuthenticationService';

describe('Google Authentication Component Test Suite', () => {
    const mockedService = mock(FakeAuthenticatorService);
    const service = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('Should render the text', () => {
        render(
            <GoogleAuthenticationComponent
                clientId=""
                cookiePolicy=""
                service={service}
            >
                Login With Google
            </GoogleAuthenticationComponent>
        );

        const element = screen.getByText('Login With Google');

        expect(element).toBeInTheDocument();
    });
});
