import { DataSourceTypes } from '../../../../models/data/DataSourceTypes';
import { IForm } from '../../../../models/form/IForm';

export interface IDataSourceFormProps {
    onSubmit: (form: IForm) => void;
    onTypeChange: (type: DataSourceTypes) => void;
    dataSourceSetupComponent: JSX.Element | undefined;
}
