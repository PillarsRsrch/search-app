import { IForm } from '../../../models/form/IForm';

export interface IFormSelectProps {
    name: string;
    label: string;
    children: string;
    defaultValue: string;
    options: string[];
    form: IForm;
}
