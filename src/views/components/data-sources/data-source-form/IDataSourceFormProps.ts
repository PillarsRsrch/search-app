import { IForm } from '../../../../models/form/IForm';

export interface IDataSourceFormProps {
    onSubmit: (form: IForm) => void;
}
