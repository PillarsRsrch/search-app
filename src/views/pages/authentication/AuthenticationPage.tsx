import React from 'react';
import { PageTransition } from '../../../models/router/PageTransition';
import { Center } from '../../bases/center/Center';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';
import { SignupCard } from '../../components/signup-card/SignupCard';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
    routerService,
}: IAuthenticationPageProps) => {
    return (
        <Center>
            <SignupCard
                authenticatorService={authenticatorService}
                iconService={iconService}
                onSignup={() =>
                    routerService.navigate(new PageTransition('/projects', 500))
                }
            />
        </Center>
    );
};
