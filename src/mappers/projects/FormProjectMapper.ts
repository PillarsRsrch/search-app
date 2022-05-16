import { IForm } from '../../models/form/IForm';
import { FundingInstituteTypes } from '../../models/projects/FundingInstituteTypes';
import { IProject } from '../../models/projects/IProject';
import { Project } from '../../models/projects/Project';
import { ScientificFieldTypes } from '../../models/projects/ScientificFieldTypes';
import { IMapper } from '../IMapper';

export class FormProjectMapper implements IMapper<IForm, IProject> {
    map(form: IForm): IProject {
        return new Project({
            name: form.getField<string>('projectName'),
            id: form
                .getField<string>('projectName')
                .toLowerCase()
                .split(' ')
                .join('-'),
            field: form.getField<ScientificFieldTypes>('projectField'),
            fundingInstitute:
                form.getField<FundingInstituteTypes>('fundingInstitute'),
        });
    }

    inverseMap(project: IProject): IForm {
        throw new Error('Method not implemented');
    }
}
