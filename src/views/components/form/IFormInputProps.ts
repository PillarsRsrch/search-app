import { IFormService } from '../../../services/foundations/form/IFormService';

export interface IFormInputProps {
    name: string;
    label: string;
    description: string;
    placeholder: string;
    type: string;
    formService: IFormService;
}
