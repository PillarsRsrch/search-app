import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LocalStorageRecordProjectMapper } from '../../src/mappers/projects/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { ProjectListPage } from '../../src/views/pages/projects/list-projects/ProjectListPage';

const Projects: NextPage = () => {
    const router = useRouter();
    const project = new LocalStorageProjectService(
        new LocalStorageRepository('projects'),
        new LocalStorageRecordProjectMapper()
    );
    const routerService = new NextRouterService(router);

    return (
        <ProjectListPage
            routerService={routerService}
            projectService={project}
        />
    );
};

export default Projects;
