import React, { useState } from 'react';
import { Card } from '../../bases/card/Card';
import { AuthenticationState } from './AuthenticationState';
import { ISignupCardProps } from './ISignupCardProps';
import { SignupSuccessFragment } from './SignupSuccessFragment';
import { SignupFailureFragment } from './SignupFailureFragment';
import { SignupFragment } from './SignupFragment';
import { AccessToken } from '../../../models/authenticators/AccessToken';

export const SignupCard = ({
    authenticatorService,
    iconService,
    cookieService,
    onSignup,
}: ISignupCardProps) => {
    const authenticationFragmentMap = new Map([
        [
            AuthenticationState.Successful,
            <SignupSuccessFragment iconService={iconService} />,
        ],
        [
            AuthenticationState.Failed,
            <SignupFailureFragment iconService={iconService} />,
        ],
        [
            AuthenticationState.Waiting,
            <SignupFragment
                authenticatorService={authenticatorService}
                onClick={onClick}
                onFailure={onFailure}
                onSuccess={onSuccess}
            />,
        ],
    ]);
    const [authenticationState, setAuthenticationState] = useState(
        AuthenticationState.Waiting
    );

    function onClick() {
        const cookies = cookieService.getAllCookies();
        const cookie = cookies.find((cookie) => cookie.key === 'access-token');
        if (cookie) {
            setAuthenticationState(AuthenticationState.Successful);
            onSignup(new AccessToken(cookie.value, 0));
        }
    }

    function onSuccess(accessToken: AccessToken) {
        setAuthenticationState(AuthenticationState.Successful);
        onSignup(accessToken);
    }

    function onFailure() {
        setAuthenticationState(AuthenticationState.Failed);
    }

    return (
        <Card width="300px" height="375px">
            {authenticationFragmentMap.get(authenticationState)}
        </Card>
    );
};
