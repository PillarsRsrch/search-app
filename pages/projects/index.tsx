import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { ProjectPage } from '../../src/views/pages/projects/ProjectPage';

const Projects: NextPage = () => {
    const router = useRouter();
    const project = new LocalStorageProjectService();
    const routerService = new NextRouterService(router);

    return (
        <ProjectPage routerService={routerService} projectService={project} />
    );
};

export default Projects;
