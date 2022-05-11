import { ReactNode } from 'react';

export interface ICardProps {
    width: string;
    height: string;
    children: ReactNode;
    onClick?: () => void;
}
