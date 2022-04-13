import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {
    anyOfClass,
    anyString,
    anything,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { PageTransition } from '../../../../src/models/routers/PageTransition';
import { Cookie } from '../../../../src/models/storage/Cookie';
import { IAuthenticatorService } from '../../../../src/services/foundations/authenticators/IAuthenticatorService';
import { ICookieService } from '../../../../src/services/foundations/cookies/ICookieService';
import { IIconService } from '../../../../src/services/foundations/icons/IIconService';
import { IRouterService } from '../../../../src/services/foundations/router/IRouterService';
import { AuthenticationPage } from '../../../../src/views/pages/authentication/AuthenticationPage';
import { FailureAuthenticator } from '../../components/authentication/fakes/FailureAuthenticator';
import { SuccessAuthenticator } from '../../components/authentication/fakes/SuccessAuthenticator';

describe('Authentication Page Test Suite', () => {
    const mockedAuthenticatorService = mock<IAuthenticatorService>();
    const mockedIconService = mock<IIconService>();
    const mockedRouterService = mock<IRouterService>();
    const mockedCookieService: ICookieService = mock<ICookieService>();
    const authenticatorService = instance(mockedAuthenticatorService);
    const iconService = instance(mockedIconService);
    const routerService = instance(mockedRouterService);
    const cookieService = instance(mockedCookieService);

    beforeEach(() => {
        reset(mockedAuthenticatorService);
        reset(mockedIconService);
        reset(mockedRouterService);
        reset(mockedCookieService);
    });

    test('Should render the authentication page with an authenticator', () => {
        const { container: page } = render(
            <AuthenticationPage
                authenticatorService={authenticatorService}
                iconService={iconService}
                routerService={routerService}
                cookieService={cookieService}
            />
        );

        const text = screen.getByText(
            'Sign up to start modernizing your research'
        );
        const button = page.getElementsByClassName('authentication-button')[0];

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(
            mockedRouterService.navigate(anyOfClass(PageTransition))
        ).never();
        verify(mockedCookieService.createCookie(anyOfClass(Cookie))).never();
        verify(mockedIconService.getIcon(anyString())).never();
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
            <AuthenticationPage
                authenticatorService={authenticatorService}
                iconService={iconService}
                routerService={routerService}
                cookieService={cookieService}
            />
        );
        const button = screen.getByText('Success');
        fireEvent.click(button);

        const successText = screen.getByText('Successfully authenticated');
        const successIcon = container.getElementsByClassName('icon')[0];

        expect(successText).toBeInTheDocument();
        expect(successIcon).toBeInTheDocument();
        verify(mockedRouterService.navigate(anyOfClass(PageTransition))).once();
        verify(mockedCookieService.createCookie(anyOfClass(Cookie))).once();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
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
            <AuthenticationPage
                authenticatorService={authenticatorService}
                iconService={iconService}
                routerService={routerService}
                cookieService={cookieService}
            />
        );
        const button = screen.getByText('Failure');
        fireEvent.click(button);

        const failureText = screen.getByText('Failed to authenticate');
        const failureIcon = container.getElementsByClassName('icon')[0];

        expect(failureText).toBeInTheDocument();
        expect(failureIcon).toBeInTheDocument();
        verify(
            mockedRouterService.navigate(anyOfClass(PageTransition))
        ).never();
        verify(mockedCookieService.createCookie(anyOfClass(Cookie))).never();
        verify(
            mockedAuthenticatorService.createAuthenticator(
                anything(),
                anything()
            )
        ).once();
        verify(mockedIconService.getIcon(anyString())).once();
    });
});
