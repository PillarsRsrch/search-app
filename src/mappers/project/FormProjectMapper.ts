import { IForm } from '../../models/form/IForm';
import { DataSourceTypes } from '../../models/projects/DataSourceTypes';
import { FundingInstituteTypes } from '../../models/projects/FundingInstituteTypes';
import { IProject } from '../../models/projects/IProject';
import { Project } from '../../models/projects/Project';
import { ScientificFieldTypes } from '../../models/projects/ScientificFieldTypes';
import { IProjectMapper } from './IProjectMapper';

export class FormProjectMapper implements IProjectMapper<IForm> {
    map(form: IForm): IProject {
        return new Project({
            name: form.getField<string>('projectName'),
            id: form
                .getField<string>('projectName')
                .toLowerCase()
                .split(' ')
                .join('-'),
            dataSource: form.getField<DataSourceTypes>('dataSource'),
            field: form.getField<ScientificFieldTypes>('projectField'),
            fundingInstitute:
                form.getField<FundingInstituteTypes>('fundingInstitute'),
        });
    }

    unmap(project: IProject): IForm {
        throw new Error('Method not implemented');
    }
}
