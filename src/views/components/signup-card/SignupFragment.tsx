import React from 'react';
import { Heading } from '../../bases/header/Heading';
import { Spacer } from '../../bases/spacer/Spacer';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../authentication/AuthenticationButton';
import { ISignupFragmentProps } from './ISignupFragmentProps';

export const SignupFragment = ({
    authenticatorService,
    onClick,
    onSuccess,
    onFailure,
}: ISignupFragmentProps) => (
    <>
        <Spacer />
        <Heading level={1}>Get Started</Heading>
        <Spacer />
        <Text>Sign up to start modernizing your research</Text>
        <Spacer />
        <AuthenticationButton
            service={authenticatorService}
            onClick={onClick}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
        <Spacer />
    </>
);
