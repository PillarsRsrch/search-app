import React from 'react';
import { instance, mock, reset, verify, when } from 'ts-mockito';
import '@testing-library/jest-dom';
import { screen, fireEvent, render } from '@testing-library/react';
import { AuthenticationButton } from '../../../../src/views/components/authentication/AuthenticationButton';
import { FakeAuthenticatorService } from './fakes/FakeAuthenticationService';
import { SuccessAuthenticator } from './fakes/SuccessAuthenticator';
import { FailureAuthenticator } from './fakes/FailureAuthenticator';

describe('Authentication Button Test Suite', () => {
    const mockedService = mock(FakeAuthenticatorService);
    const service = instance(mockedService);

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

    test('When the button is clicked the on click event should be clicked', () => {
        const spy = jest.fn();
        render(
            <AuthenticationButton onClick={spy}>
                <SuccessAuthenticator service={service} />
            </AuthenticationButton>
        );

        fireEvent.click(screen.getByText('Success'));

        expect(spy).toHaveBeenCalled();
        verify(mockedService.handleSuccess()).once();
        verify(mockedService.handleFailure()).never();
    });
});
