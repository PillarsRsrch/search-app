import { FormProjectMapper } from '../../../src/mappers/project/FormProjectMapper';
import { Form } from '../../../src/models/form/Form';
import { DataSourceTypes } from '../../../src/models/projects/DataSourceTypes';
import { FundingInstituteTypes } from '../../../src/models/projects/FundingInstituteTypes';
import { Project } from '../../../src/models/projects/Project';
import { ScientificFieldTypes } from '../../../src/models/projects/ScientificFieldTypes';

describe('Form Project Mapper Test Suite', () => {
    const mapper = new FormProjectMapper();

    describe('map', () => {
        test('Should map a form to a project', () => {
            const form = new Form(
                new Map([
                    ['projectName', 'Project'],
                    ['fundingInstitute', 'National Science Foundation'],
                    ['projectField', 'Engineering'],
                    ['dataSource', 'Google Drive'],
                ])
            );
            const expectedProject = new Project({
                id: 'project',
                name: 'Project',
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
                field: ScientificFieldTypes.Engineering,
                dataSource: DataSourceTypes.GoogleDrive,
            });

            const actualProject = mapper.map(form);

            expect(actualProject).toEqual(expectedProject);
        });
    });
});