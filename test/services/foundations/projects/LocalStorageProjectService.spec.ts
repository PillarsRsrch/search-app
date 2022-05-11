import {
    anyOfClass,
    anything,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { IProjectMapper } from '../../../../src/mappers/project/IProjectMapper';
import { DataSourceTypes } from '../../../../src/models/projects/DataSourceTypes';
import { FundingInstituteTypes } from '../../../../src/models/projects/FundingInstituteTypes';
import { IProject } from '../../../../src/models/projects/IProject';
import { Project } from '../../../../src/models/projects/Project';
import { ScientificFieldTypes } from '../../../../src/models/projects/ScientificFieldTypes';
import { ILocalStorageRepository } from '../../../../src/repositories/local-storage/ILocalStorageRepository';
import { LocalStorageRecord } from '../../../../src/repositories/local-storage/LocalStorageRecord';
import { LocalStorageProjectService } from '../../../../src/services/foundations/projects/LocalStorageProjectService';

describe('Local Storage Project Service Test Suite', () => {
    const mockedRepository = mock<ILocalStorageRepository>();
    const mockedMapper = mock<IProjectMapper<LocalStorageRecord>>();
    const mockedProject = mock<IProject>();
    const repository = instance(mockedRepository);
    const mapper = instance(mockedMapper);
    const project = instance(mockedProject);
    const projectService = new LocalStorageProjectService(repository, mapper);

    beforeEach(() => {
        reset(mockedRepository);
        reset(mockedMapper);
        reset(mockedProject);
    });

    describe('createProjectAsync', () => {
        test('Should create a project and store it in the repository', async () => {
            const inputProject = new Project({
                id: 'project',
                name: 'Project',
                fundingInstitute:
                    FundingInstituteTypes.NationalScienceFoundation,
                field: ScientificFieldTypes.Engineering,
                dataSource: DataSourceTypes.GoogleDrive,
            });
            const expectedProject = inputProject;
            when(mockedMapper.unmap(anything())).thenReturn({});
            when(mockedMapper.map(anything())).thenReturn(inputProject);
            when(mockedRepository.save(anything())).thenCall((x) => x);

            const actualProject = await projectService.createProjectAsync(
                inputProject
            );

            verify(mockedRepository.save(anything())).once();
            verify(mockedMapper.unmap(inputProject)).once();
            verify(mockedMapper.map(anything())).once();
            expect(actualProject).toEqual(expectedProject);
        });
    });

    describe('getAllProjectsAsync', () => {
        test('Should get all projects in the local storage', async () => {
            when(mockedMapper.map(anything())).thenReturn(project);
            when(mockedRepository.getAll()).thenReturn([{}]);
            when(mockedProject.id()).thenReturn('id');

            const actualProjects = await projectService.getAllProjectsAsync();

            verify(mockedMapper.map(anything())).once();
            verify(mockedRepository.getAll()).once();
            expect(actualProjects).toHaveLength(1);
            expect(actualProjects[0].id()).toEqual('id');
        });
    });
});
