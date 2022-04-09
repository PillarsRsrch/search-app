import { ReactElement } from 'react';
import { IAuthenticatorComponentProps } from '../../components/authentication/authenticators/IAuthenticatorComponentProps';

export interface IAuthenticationPageProps {
    children: ReactElement<IAuthenticatorComponentProps>;
}
