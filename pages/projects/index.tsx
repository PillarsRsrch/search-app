import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IProjectService } from '../../src/services/foundations/projects/IProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { ProjectPage } from '../../src/views/pages/projects/ProjectPage';

const Projects: NextPage = () => {
    const router = useRouter();
    const project: IProjectService = {
        getAllProjectsAsync: () => Promise.resolve([]),
        createProjectAsync: () => Promise.resolve({}),
    };
    const routerService = new NextRouterService(router);

    return (
        <ProjectPage routerService={routerService} projectService={project} />
    );
};

export default Projects;
