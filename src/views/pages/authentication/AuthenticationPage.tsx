import React from 'react';
import { PageTransition } from '../../../models/routers/PageTransition';
import { Center } from '../../bases/center/Center';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';
import { SignupCard } from '../../components/authentication/signup-card/SignupCard';
import { Spacer } from '../../bases/spacer/Spacer';
import { FlexLayout } from '../../bases/layout/FlexLayout';
import { Cookie } from '../../../models/storage/Cookie';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
    routerService,
    cookieService,
}: IAuthenticationPageProps) => {
    return (
        <Center>
            <FlexLayout
                className="authentication-page"
                styles={{
                    height: '100vh',
                    alignItems: 'center',
                }}
            >
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
            </FlexLayout>
        </Center>
    );
};
