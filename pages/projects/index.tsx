import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IProjectsService } from '../../src/services/foundations/projects/IProjectsService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { ProjectPage } from '../../src/views/pages/projects/ProjectPage';

const Projects: NextPage = () => {
    const router = useRouter();
    const project: IProjectsService = {
        getAllServicesAsync: () => Promise.resolve([]),
    };
    const routerService = new NextRouterService(router);

    return (
        <ProjectPage routerService={routerService} projectService={project} />
    );
};

export default Projects;
