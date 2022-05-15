import { FundingInstituteTypes } from './FundingInstituteTypes';
import { ScientificFieldTypes } from './ScientificFieldTypes';

export interface IProject {
    id(): string;
    name(): string;
    fundingInstitute(): FundingInstituteTypes;
    field(): ScientificFieldTypes;
}
