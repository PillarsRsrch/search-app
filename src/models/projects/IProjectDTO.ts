import { DataSourceTypes } from './DataSourceTypes';
import { FundingInstituteTypes } from './FundingInstituteTypes';
import { ScientificFieldTypes } from './ScientificFieldTypes';

export interface IProjectDTO {
    id: string;
    name: string;
    fundingInstitute: FundingInstituteTypes;
    dataSource: DataSourceTypes;
    field: ScientificFieldTypes;
}
