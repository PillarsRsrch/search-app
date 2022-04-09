import React, { ReactElement, MouseEvent } from 'react';
import { IAuthenticatorComponentProps } from './authenticators/IAuthenticatorComponentProps';

export interface IAuthenticationButtonProps {
    onClick: (e: MouseEvent) => void;
    children: ReactElement<IAuthenticatorComponentProps>;
}
