import { FundingInstituteTypes } from './FundingInstituteTypes';
import { ScientificFieldTypes } from './ScientificFieldTypes';

export interface IProjectDTO {
    id: string;
    name: string;
    fundingInstitute: FundingInstituteTypes;
    field: ScientificFieldTypes;
}
