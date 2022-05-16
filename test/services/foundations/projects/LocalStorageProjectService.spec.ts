import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IMapper } from '../../../../src/mappers/IMapper';
import { FundingInstituteTypes } from '../../../../src/models/projects/FundingInstituteTypes';
import { IProject } from '../../../../src/models/projects/IProject';
import { Project } from '../../../../src/models/projects/Project';
import { ScientificFieldTypes } from '../../../../src/models/projects/ScientificFieldTypes';
import { IRepository } from '../../../../src/repositories/IRepository';
import { LocalStorageRecord } from '../../../../src/repositories/local-storage/LocalStorageRecord';
import { LocalStorageProjectService } from '../../../../src/services/foundations/projects/LocalStorageProjectService';
import { resolvableInstance } from '../../../extensions/resolvableInstance';

describe('Local Storage Project Service Test Suite', () => {
    const mockedRepository = mock<IRepository<LocalStorageRecord>>();
    const mockedMapper = mock<IMapper<LocalStorageRecord, IProject>>();
    const mockedProject = mock<IProject>();
    const repository = instance(mockedRepository);
    const mapper = instance(mockedMapper);
    const project = resolvableInstance(mockedProject);
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
            });
            const expectedProject = inputProject;
            when(mockedMapper.inverseMap(anything())).thenReturn({});
            when(mockedMapper.map(anything())).thenReturn(inputProject);
            when(mockedRepository.create(anything())).thenCall((x) => x);

            const actualProject = await projectService.createProjectAsync(
                inputProject
            );

            verify(mockedRepository.create(anything())).once();
            verify(mockedMapper.inverseMap(inputProject)).once();
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

    describe('getProjectByIdAsync', () => {
        test('Should get project by id', async () => {
            const projectId = 'project-id';
            when(mockedRepository.getById(projectId)).thenReturn({});
            when(mockedMapper.map(anything())).thenReturn(project);
            when(mockedProject.id()).thenReturn(projectId);

            const actualProject = await projectService.getProjectByIdAsync(
                projectId
            );

            expect(actualProject.id()).toEqual(projectId);
            verify(mockedMapper.map(anything())).once();
            verify(mockedRepository.getById(projectId)).once();
        });
    });
});
