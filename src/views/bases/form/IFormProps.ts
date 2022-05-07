import { ReactNode } from 'react';
import { IForm } from '../../../models/form/IForm';

export interface IFormProps {
    children?: ReactNode;
    form: IForm;
    onSubmit: (form: IForm) => void;
}
