import React from 'react';
import { PageTransition } from '../../../models/routers/PageTransition';
import { Center } from '../../bases/center/Center';
import { IAuthenticationPageProps } from './IAuthenticationPageProps';
import { SignupCard } from '../../components/signup-card/SignupCard';
import { Spacer } from '../../bases/spacer/Spacer';
import { FlexLayout } from '../../bases/layout/FlexLayout';

export const AuthenticationPage = ({
    authenticatorService,
    iconService,
    routerService,
}: IAuthenticationPageProps) => {
    return (
        <Center>
            <FlexLayout
                styles={{
                    height: '100vh',
                    alignItems: 'center',
                }}
            >
                <Spacer />
                <SignupCard
                    authenticatorService={authenticatorService}
                    iconService={iconService}
                    onSignup={(token) => {
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
