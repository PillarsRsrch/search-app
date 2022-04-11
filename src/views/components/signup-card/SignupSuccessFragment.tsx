import React from 'react';
import { Text } from '../../bases/text/Text';
import { Icon } from '../icon/Icon';
import { IconSize } from '../icon/IconSize';
import { ISignupSuccesFragmentProps } from './ISignupSuccessFragmentProps';

export const SignupSuccessFragment = ({
    iconService,
}: ISignupSuccesFragmentProps) => (
    <>
        <Text>Successfully authenticated</Text>
        <Icon name="checkmark" size={IconSize.Small} service={iconService} />
    </>
);
