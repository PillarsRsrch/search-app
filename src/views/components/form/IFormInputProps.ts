import { IForm } from '../../../models/form/IForm';

export interface IFormInputProps {
    name: string;
    label: string;
    description: string;
    placeholder: string;
    type: string;
    form: IForm;
}
