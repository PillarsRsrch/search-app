import React from 'react';
import { Spacer } from '../../../bases/spacer/Spacer';
import { Text } from '../../../bases/text/Text';
import { Icon } from '../../../bases/icon/Icon';
import { IconSize } from '../../../bases/icon/IconSize';
import { ISignUpSuccessFragmentProps } from './ISignUpSuccessFragmentProps';

export const SignUpSuccessFragment = ({
    iconService,
}: ISignUpSuccessFragmentProps) => (
    <>
        <Spacer />
        <Text>Successfully authenticated</Text>
        <Icon name="checkmark" size={IconSize.Small} service={iconService} />
        <Spacer />
    </>
);
