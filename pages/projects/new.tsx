import { NextPage } from 'next';
import { IProjectService } from '../../src/services/foundations/projects/IProjectService';
import { CreateProjectPage } from '../../src/views/pages/projects/create-project/CreateProjectPage';

const NewProject: NextPage = () => {
    const projectService: IProjectService = {
        getAllProjectsAsync: () => Promise.resolve([]),
        createProjectAsync: () => Promise.resolve({}),
    };

    return <CreateProjectPage projectService={projectService} />;
};

export default NewProject;
