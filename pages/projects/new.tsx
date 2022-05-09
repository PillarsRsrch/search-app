import { NextPage } from 'next';
import { ProjectMapper } from '../../src/mappers/project/ProjectMapper';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { CreateProjectPage } from '../../src/views/pages/projects/create-project/CreateProjectPage';

const NewProject: NextPage = () => {
    const projectService = new LocalStorageProjectService();
    const projectMapper = new ProjectMapper();

    return (
        <CreateProjectPage
            projectMapper={projectMapper}
            projectService={projectService}
        />
    );
};

export default NewProject;
