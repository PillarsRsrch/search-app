import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LocalStorageRecordProjectMapper } from '../../src/mappers/projects/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { Head } from '../../src/views/bases/head/Head';
import { Scripts } from '../../src/views/bases/scripts/Scripts';
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
        <>
            <Head title="Pillars Research Service" />
            <ViewProjectPage
                routerService={routerService}
                projectId={id}
                projectService={projectService}
            />
            <Scripts />
        </>
    );
};

export default ViewProject;
