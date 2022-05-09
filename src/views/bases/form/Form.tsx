import React from 'react';
import { IFormProps } from './IFormProps';

export const Form = ({ children, onSubmit, form }: IFormProps) => (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form);
        }}
    >
        {children}
        <button type="submit">Submit</button>
    </form>
);
