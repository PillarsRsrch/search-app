import React from 'react';
import { Button } from '../button/Button';
import { IFormProps } from './IFormProps';

export const Form = ({ children, onSubmit, form }: IFormProps) => (
    <form>
        {children}
        <Button onClick={() => onSubmit(form)} disabled={false}>
            Submit
        </Button>
    </form>
);
