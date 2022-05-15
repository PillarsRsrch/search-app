import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LocalStorageRecordProjectMapper } from '../../src/mappers/project/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { ViewProjectPage } from '../../src/views/pages/projects/view-project/ViewProjectPage';

const ViewProject: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const projectService = new LocalStorageProjectService(
        new LocalStorageRepository('projects'),
        new LocalStorageRecordProjectMapper()
    );
    const routerService = new NextRouterService(router);

    return (
        <ViewProjectPage
            routerService={routerService}
            projectId={id}
            projectService={projectService}
        />
    );
};

export default ViewProject;
