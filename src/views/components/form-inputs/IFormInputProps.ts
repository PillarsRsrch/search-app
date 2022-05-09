import { IForm } from '../../../models/form/IForm';

export interface IFormInputProps {
    name: string;
    label: string;
    children: string;
    placeholder: string;
    type: string;
    form: IForm;
}
