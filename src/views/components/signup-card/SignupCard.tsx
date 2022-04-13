import React, { useState } from 'react';
import { Card } from '../../bases/card/Card';
import { AuthenticationState } from './AuthenticationState';
import { ISignupCardProps } from './ISignupCardProps';
import { SignupSuccessFragment } from './SignupSuccessFragment';
import { SignupFailureFragment } from './SignupFailureFragment';
import { SignupFragment } from './SignupFragment';

export const SignupCard = ({
    authenticatorService,
    iconService,
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
                onFailure={onFailure}
                onSuccess={onSuccess}
            />,
        ],
    ]);
    const [authenticationState, setAuthenticationState] = useState(
        AuthenticationState.Waiting
    );

    function onSuccess() {
        setAuthenticationState(AuthenticationState.Successful);
        onSignup();
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
