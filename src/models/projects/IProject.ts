import { IIdentifiable } from '../../operations/IIdentifiable';
import { FundingInstituteTypes } from './FundingInstituteTypes';
import { ScientificFieldTypes } from './ScientificFieldTypes';

export interface IProject extends IIdentifiable {
    name(): string;
    fundingInstitute(): FundingInstituteTypes;
    field(): ScientificFieldTypes;
}
