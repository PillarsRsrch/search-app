import React from 'react';
import { PageTransition } from '../../../models/routers/PageTransition';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';
import { SignupCard } from '../../components/authentications/signup-card/SignupCard';
import { Spacer } from '../../bases/spacer/Spacer';
import { Cookie } from '../../../models/storage/Cookie';
import { CenteredLayout } from '../../components/layouts/centered/CenteredLayout';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
    routerService,
    cookieService,
}: IAuthenticationPageProps) => {
    return (
        <CenteredLayout>
            <Spacer />
            <SignupCard
                authenticatorService={authenticatorService}
                cookieService={cookieService}
                iconService={iconService}
                onSignup={(token) => {
                    cookieService.createCookie(
                        new Cookie('access-token', token.value)
                    );
                    routerService.navigate(
                        new PageTransition('/projects', 500)
                    );
                }}
            />
            <Spacer />
        </CenteredLayout>
    );
};
