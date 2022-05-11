import { LocalStorageRecordProjectMapper } from '../../../src/mappers/project/LocalStorageRecordProjectMapper';
import { DataSourceTypes } from '../../../src/models/projects/DataSourceTypes';
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
                dataSource: DataSourceTypes.GoogleDrive,
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
            });
            const localStorage = {
                id: 'project',
                name: 'Project',
                field: 'Engineering',
                dataSource: 'Google Drive',
                fundingInstitute: 'National Science Foundation',
            };

            const actualProject = mapper.map(localStorage);

            expect(actualProject).toEqual(expectedProject);
        });
    });

    describe('unmap', () => {
        test('Should unmap a project to a local storage record', () => {
            const expectedRecord = {
                id: 'project',
                name: 'Project',
                field: 'Engineering',
                dataSource: 'Google Drive',
                fundingInstitute: 'National Science Foundation',
            };
            const project = new Project({
                id: 'project',
                name: 'Project',
                field: ScientificFieldTypes.Engineering,
                dataSource: DataSourceTypes.GoogleDrive,
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
            });

            const actualRecord = mapper.unmap(project);

            expect(actualRecord).toEqual(expectedRecord);
        });
    });
});
