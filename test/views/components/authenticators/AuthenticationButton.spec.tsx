import React from 'react';
import { instance, mock, reset, verify, when } from 'ts-mockito';
import '@testing-library/jest-dom';
import { screen, fireEvent, render } from '@testing-library/react';
import { AuthenticationButton } from '../../../../src/views/components/authentication/AuthenticationButton';
import { IAuthenticatorComponentProps } from '../../../../src/views/components/authentication/IAuthenticatorComponentProps';
import { IAuthenticatorService } from '../../../../src/services/foundations/authenticators/IAuthenticatorService';

const SuccessAuthenticator = ({ service }: IAuthenticatorComponentProps) => {
    return <button onClick={() => service.handleSuccess()}>Success</button>;
};

const FailureAuthenticator = ({ service }: IAuthenticatorComponentProps) => {
    return <button onClick={() => service.handleFailure()}>Failure</button>;
};

abstract class FakeAuthenticatorService implements IAuthenticatorService {
    handleSuccess(): void {}
    handleFailure(): void {}
}

describe('Authentication Button Test Suite', () => {
    const mockedService = mock(FakeAuthenticatorService);
    const service: FakeAuthenticatorService = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('When the button is clicked and the authentication succeeds', () => {
        render(
            <AuthenticationButton onClick={() => null}>
                <SuccessAuthenticator service={service} />
            </AuthenticationButton>
        );
        when(mockedService.handleSuccess()).thenReturn();

        fireEvent.click(screen.getByText('Success'));

        verify(mockedService.handleSuccess()).once();
        verify(mockedService.handleFailure()).never();
    });

    test('When the button is clicked and the authentication failed', () => {
        render(
            <AuthenticationButton onClick={() => null}>
                <FailureAuthenticator service={service} />
            </AuthenticationButton>
        );
        when(mockedService.handleSuccess()).thenReturn();

        fireEvent.click(screen.getByText('Failure'));

        verify(mockedService.handleSuccess()).never();
        verify(mockedService.handleFailure()).once();
    });
});
