import { FormProjectMapper } from '../../../src/mappers/projects/FormProjectMapper';
import { Form } from '../../../src/models/form/Form';
import { DataSourceTypes } from '../../../src/models/data/DataSourceTypes';
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
                ])
            );
            const expectedProject = new Project({
                id: 'project',
                name: 'Project',
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
                field: ScientificFieldTypes.Engineering,
            });

            const actualProject = mapper.map(form);

            expect(actualProject).toEqual(expectedProject);
        });
    });
});
