import { IButtonListener } from './IButtonListener';

export interface IButtonProps {
    onClick: IButtonListener;
    disabled: boolean;
    children: string;
}
