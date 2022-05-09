import React from 'react';
import { Spacer } from '../../../bases/spacer/Spacer';
import { Text } from '../../../bases/text/Text';
import { Icon } from '../../../bases/icon/Icon';
import { IconSize } from '../../../bases/icon/IconSize';
import { ISignupFailureFragmentProps } from './ISignupFailureFragmentProps';

export const SignupFailureFragment = ({
    iconService,
}: ISignupFailureFragmentProps) => (
    <>
        <Spacer />
        <Text>Failed to authenticate</Text>
        <Icon name="times" size={IconSize.Small} service={iconService} />
        <Spacer />
    </>
);
