import { IForm } from '../../../../models/form/IForm';

export interface ICreateProjectFormProps {
    onSubmit: (form: IForm) => void;
}
