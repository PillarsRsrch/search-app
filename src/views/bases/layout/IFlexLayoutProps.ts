import { ReactNode } from 'react';
import { IFlexLayoutStyles } from './IFlexLayoutStyles';

export interface IFlexLayoutProps {
    styles: Partial<IFlexLayoutStyles>;
    children: ReactNode;
}
