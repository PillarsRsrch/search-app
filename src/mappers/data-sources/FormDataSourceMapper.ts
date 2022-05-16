import { DataSource } from '../../models/data/DataSource';
import { IDataSource } from '../../models/data/IDataSource';
import { IForm } from '../../models/form/IForm';
import { IMapper } from '../IMapper';

export class FormDataSourceMapper implements IMapper<IForm, IDataSource> {
    map(form: IForm): IDataSource {
        return new DataSource({
            name: form.getField('name'),
            type: form.getField('type'),
        });
    }

    inverseMap(project: IDataSource): IForm {
        throw new Error('Method not implemented.');
    }
}
