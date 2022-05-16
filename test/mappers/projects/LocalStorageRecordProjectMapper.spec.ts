import { LocalStorageRecordProjectMapper } from '../../../src/mappers/projects/LocalStorageRecordProjectMapper';
import { FundingInstituteTypes } from '../../../src/models/projects/FundingInstituteTypes';
import { Project } from '../../../src/models/projects/Project';
import { ScientificFieldTypes } from '../../../src/models/projects/ScientificFieldTypes';

describe('Local Storage Record Project Mapper', () => {
    const mapper = new LocalStorageRecordProjectMapper();

    describe('map', () => {
        test('Should map a local storage record to a project', () => {
            const expectedProject = new Project({
                id: 'project',
                name: 'Project',
                field: ScientificFieldTypes.Engineering,
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
            });
            const localStorage = {
                id: 'project',
                name: 'Project',
                field: 'Engineering',
                fundingInstitute: 'National Science Foundation',
            };

            const actualProject = mapper.map(localStorage);

            expect(actualProject).toEqual(expectedProject);
        });
    });

    describe('inverseMap', () => {
        test('Should inverseMap a project to a local storage record', () => {
            const expectedRecord = {
                id: 'project',
                name: 'Project',
                field: 'Engineering',
                fundingInstitute: 'National Science Foundation',
            };
            const project = new Project({
                id: 'project',
                name: 'Project',
                field: ScientificFieldTypes.Engineering,
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
            });

            const actualRecord = mapper.inverseMap(project);

            expect(actualRecord).toEqual(expectedRecord);
        });
    });
});
