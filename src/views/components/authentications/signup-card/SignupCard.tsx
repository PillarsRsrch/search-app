import React, { useState } from 'react';
import { Card } from '../../../bases/card/Card';
import { AuthenticationState } from './AuthenticationState';
import { ISignUpCardProps } from './ISignUpCardProps';
import { SignUpSuccessFragment } from './SignUpSuccessFragment';
import { SignUpFailureFragment } from './SignUpFailureFragment';
import { SignUpFragment } from './SignUpFragment';
import { AccessToken } from '../../../../models/authenticators/AccessToken';

export const SignUpCard = ({
    authenticatorService,
    iconService,
    cookieService,
    onSignUp: onSignup,
}: ISignUpCardProps) => {
    const authenticationFragmentMap = new Map([
        [
            AuthenticationState.Successful,
            <SignUpSuccessFragment iconService={iconService} />,
        ],
        [
            AuthenticationState.Failed,
            <SignUpFailureFragment iconService={iconService} />,
        ],
        [
            AuthenticationState.Waiting,
            <SignUpFragment
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
