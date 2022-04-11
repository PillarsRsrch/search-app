import React, { useState } from 'react';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { Icon } from '../../components/icon/Icon';
import { IconSize } from '../../components/icon/IconSize';
import { AuthenticationState } from './AuthenticationState';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
}: IAuthenticationPageProps) => {
    const [authenticationState, setAuthenticationState] = useState(
        AuthenticationState.Waiting
    );

    if (authenticationState === AuthenticationState.Successful) {
        return (
            <>
                <Text>Successfully authenticated</Text>
                <Icon
                    name="checkmark"
                    size={IconSize.Small}
                    service={iconService}
                />
            </>
        );
    } else if (authenticationState === AuthenticationState.Failed) {
        return (
            <>
                <Text>Failed to authenticate</Text>
                <Icon
                    name="times"
                    size={IconSize.Small}
                    service={iconService}
                />
            </>
        );
    } else {
        return (
            <>
                <Text>Login with google to create a new project</Text>
                <AuthenticationButton
                    service={authenticatorService}
                    onClick={() => {}}
                    onSuccess={() =>
                        setAuthenticationState(AuthenticationState.Successful)
                    }
                    onFailure={() =>
                        setAuthenticationState(AuthenticationState.Failed)
                    }
                />
            </>
        );
    }
};
