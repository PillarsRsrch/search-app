import React from 'react';
import { PageTransition } from '../../../models/routers/PageTransition';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';
import { SignUpCard } from '../../components/authentications/signup-card/SignUpCard';
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
            <SignUpCard
                authenticatorService={authenticatorService}
                cookieService={cookieService}
                iconService={iconService}
                onSignUp={(token) => {
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
