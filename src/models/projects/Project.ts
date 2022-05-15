import { FundingInstituteTypes } from './FundingInstituteTypes';
import { IProject } from './IProject';
import { IProjectDTO } from './IProjectDTO';
import { ScientificFieldTypes } from './ScientificFieldTypes';

export class Project implements IProject {
    constructor(private readonly dto: IProjectDTO) {}

    id(): string {
        return this.dto.id;
    }

    name(): string {
        return this.dto.name;
    }

    fundingInstitute(): FundingInstituteTypes {
        return this.dto.fundingInstitute;
    }

    field(): ScientificFieldTypes {
        return this.dto.field;
    }
}
