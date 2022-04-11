import React from 'react';
import { Heading } from '../../bases/header/Heading';
import { Text } from '../../bases/text/Text';
import { AuthenticationButton } from '../authentication/AuthenticationButton';
import { ISignupFragmentProps } from './ISignupFragmentProps';

export const SignupFragment = ({
    authenticatorService,
    onSuccess,
    onFailure,
}: ISignupFragmentProps) => (
    <>
        <Heading level={1}>Get Started</Heading>
        <Text>Sign up to start modernizing your research</Text>
        <AuthenticationButton
            service={authenticatorService}
            onClick={() => {}}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    </>
);
