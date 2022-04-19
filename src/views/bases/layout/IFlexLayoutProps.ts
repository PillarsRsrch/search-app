import { ReactNode } from 'react';
import { IFlexLayoutStyles } from './IFlexLayoutStyles';

export interface IFlexLayoutProps {
    className: string;
    styles: Partial<IFlexLayoutStyles>;
    children: ReactNode;
}
