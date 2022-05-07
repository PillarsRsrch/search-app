import { ReactElement } from 'react';
import { IInputProps } from '../input/IInputProps';
import { ITextProps } from '../text/ITextProps';

export interface ILabelProps {
    value: string;
    children: [ReactElement<ITextProps>, ReactElement<IInputProps>];
}
