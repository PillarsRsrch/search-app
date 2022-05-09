import { ReactElement } from 'react';
import { IInputProps } from '../input/IInputProps';
import { ISelectProps } from '../select/ISelectProps';
import { ITextProps } from '../text/ITextProps';

export interface ILabelProps {
    value: string;
    children: [
        ReactElement<ITextProps>,
        ReactElement<IInputProps> | ReactElement<ISelectProps>
    ];
}
