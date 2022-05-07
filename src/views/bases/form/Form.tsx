import React from 'react';
import { IFormProps } from './IFormProps';

export const Form = ({ children, onSubmit, form }: IFormProps) => (
    <form onSubmit={() => onSubmit(form)}>
        {children}
        <button type="submit">Submit</button>
    </form>
);
