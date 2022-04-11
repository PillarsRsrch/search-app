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
    const [authenticationState, setAuthenticationState] = useState(
        AuthenticationState.Waiting
    );
    return (
        <Card width="300px" height="375px">
            {getSignupFragment()}
        </Card>
    );

    function getSignupFragment() {
        switch (authenticationState) {
            case AuthenticationState.Successful:
                return <SignupSuccessFragment iconService={iconService} />;
            case AuthenticationState.Failed:
                return <SignupFailureFragment iconService={iconService} />;
            default:
                return (
                    <SignupFragment
                        authenticatorService={authenticatorService}
                        onFailure={onFailure}
                        onSuccess={onSuccess}
                    />
                );
        }
    }

    function onSuccess() {
        setAuthenticationState(AuthenticationState.Successful);
        onSignup();
    }

    function onFailure() {
        setAuthenticationState(AuthenticationState.Failed);
    }
};
