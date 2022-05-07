import { ReactElement } from 'react';
import { IInputProps } from '../input/IInputProps';

export interface ILabelProps {
    value: string;
    children: ReactElement<IInputProps>;
}
