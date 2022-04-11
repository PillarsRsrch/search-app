import { ReactNode } from 'react';
import { ILayoutStyles } from './ILayoutStyles';

export interface ILayoutProps {
    styles: ILayoutStyles;
    children: ReactNode;
}
