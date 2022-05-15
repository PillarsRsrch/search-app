import { FundingInstituteTypes } from '../../models/projects/FundingInstituteTypes';
import { IProject } from '../../models/projects/IProject';
import { Project } from '../../models/projects/Project';
import { ScientificFieldTypes } from '../../models/projects/ScientificFieldTypes';
import { LocalStorageRecord } from '../../repositories/local-storage/LocalStorageRecord';
import { IProjectMapper } from './IProjectMapper';

export class LocalStorageRecordProjectMapper
    implements IProjectMapper<LocalStorageRecord>
{
    map(obj: LocalStorageRecord): IProject {
        return new Project({
            id: obj['id'],
            name: obj['name'],
            fundingInstitute: obj['fundingInstitute'] as FundingInstituteTypes,
            field: obj['field'] as ScientificFieldTypes,
        });
    }

    unmap(project: IProject): LocalStorageRecord {
        return {
            id: project.id(),
            name: project.name(),
            fundingInstitute: project.fundingInstitute(),
            field: project.field(),
        };
    }
}
