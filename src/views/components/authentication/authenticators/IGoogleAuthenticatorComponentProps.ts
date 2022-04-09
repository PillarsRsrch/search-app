import { IAuthenticatorComponentProps } from './IAuthenticatorComponentProps';

export interface IGoogleAuthenticatorComponentProps
    extends IAuthenticatorComponentProps {
    clientId: string;
    children: string;
    cookiePolicy: string;
}
