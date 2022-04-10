import '@testing-library/jest-dom';
import React from 'react';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { screen, fireEvent, render } from '@testing-library/react';
import { AuthenticationButton } from '../../../../src/views/components/authentication/AuthenticationButton';
import { FakeAuthenticatorService } from './fakes/FakeAuthenticatorService';
import { SuccessAuthenticator } from './fakes/SuccessAuthenticator';
import { FailureAuthenticator } from './fakes/FailureAuthenticator';

describe('Authentication Button Test Suite', () => {
    const mockedService = mock(FakeAuthenticatorService);
    const service = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('When the button is clicked and the authentication succeeds', () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
        const onClick = jest.fn();
        when(
            mockedService.createAuthenticator(anything(), anything())
        ).thenReturn(
            <SuccessAuthenticator onFailure={onFailure} onSuccess={onSuccess} />
        );

        render(
            <AuthenticationButton
                onSuccess={onSuccess}
                onFailure={onFailure}
                service={service}
                onClick={onClick}
            />
        );
        fireEvent.click(screen.getByText('Success'));

        expect(onSuccess).toBeCalled();
        expect(onFailure).not.toBeCalled();
        expect(onClick).toBeCalled();
        verify(
            mockedService.createAuthenticator(anything(), anything())
        ).once();
    });

    test('When the button is clicked and the authentication failed', () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
        const onClick = jest.fn();
        when(
            mockedService.createAuthenticator(anything(), anything())
        ).thenReturn(
            <FailureAuthenticator onFailure={onFailure} onSuccess={onSuccess} />
        );

        render(
            <AuthenticationButton
                onSuccess={onSuccess}
                onFailure={onFailure}
                service={service}
                onClick={onClick}
            />
        );
        fireEvent.click(screen.getByText('Failure'));

        expect(onSuccess).not.toBeCalled();
        expect(onFailure).toBeCalled();
        expect(onClick).toBeCalled();
        verify(
            mockedService.createAuthenticator(anything(), anything())
        ).once();
    });
});
