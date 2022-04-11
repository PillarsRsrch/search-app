import React, { useState } from 'react';
import { PageTransition } from '../../../models/router/PageTransition';
import { IIconService } from '../../../services/foundations/icons/IIconService';
import { Card } from '../../bases/card/Card';
import { Heading } from '../../bases/header/Heading';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../../components/authentication/AuthenticationButton';
import { Icon } from '../../components/icon/Icon';
import { IconSize } from '../../components/icon/IconSize';
import { AuthenticationState } from './AuthenticationState';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
    routerService,
}: IAuthenticationPageProps) => {
    const [authenticationState, setAuthenticationState] = useState(
        AuthenticationState.Waiting
    );

    if (authenticationState === AuthenticationState.Successful) {
        return renderSuccesState();
    } else if (authenticationState === AuthenticationState.Failed) {
        return renderFailureState(iconService);
    } else {
        return renderAuthenticationPage();
    }

    function renderAuthenticationPage() {
        return (
            <Card>
                <Heading level={1}>Get Started</Heading>
                <Text>Sign up to start modernizing your research</Text>
                <AuthenticationButton
                    service={authenticatorService}
                    onClick={() => {}}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            </Card>
        );
    }

    function onSuccess() {
        setAuthenticationState(AuthenticationState.Successful);
        routerService.navigate(new PageTransition('/projects', 500));
    }

    function onFailure() {
        setAuthenticationState(AuthenticationState.Failed);
    }

    function renderSuccesState() {
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

    function renderFailureState(iconService: IIconService) {
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
    }
};
