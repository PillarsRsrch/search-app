import { NextPage } from 'next';
import { IProjectsService } from '../src/services/foundations/projects/IProjectsService';
import { ProjectPage } from '../src/views/pages/projects/ProjectPage';

const Projects: NextPage = () => {
    const project: IProjectsService = {
        getAllServicesAsync: () => Promise.resolve([]),
    };

    return <ProjectPage projectService={project} />;
};

export default Projects;
