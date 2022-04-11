import React from 'react';
import { Text } from '../../bases/text/Text';
import { Icon } from '../icon/Icon';
import { IconSize } from '../icon/IconSize';
import { ISignupFailureFragmentProps } from './ISignupFailureFragmentProps';

export const SignupFailureFragment = ({
    iconService,
}: ISignupFailureFragmentProps) => (
    <>
        <Text>Failed to authenticate</Text>
        <Icon name="times" size={IconSize.Small} service={iconService} />
    </>
);
