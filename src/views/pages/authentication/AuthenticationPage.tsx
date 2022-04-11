import React, { useState } from 'react';
import { IAuthenticatorService } from '../../../services/foundations/authenticators/IAuthenticatorService';
import { IIconService } from '../../../services/foundations/icons/IIconService';
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
        return renderSuccesState(iconService);
    } else if (authenticationState === AuthenticationState.Failed) {
        return renderFailureState(iconService);
    } else {
        return renderAuthenticationPage(
            authenticatorService,
            setAuthenticationState
        );
    }
};

function renderAuthenticationPage(
    authenticatorService: IAuthenticatorService,
    setAuthenticationState: React.Dispatch<
        React.SetStateAction<AuthenticationState>
    >
) {
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

function renderFailureState(iconService: IIconService) {
    return (
        <>
            <Text>Failed to authenticate</Text>
            <Icon name="times" size={IconSize.Small} service={iconService} />
        </>
    );
}

function renderSuccesState(iconService: IIconService) {
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
}
