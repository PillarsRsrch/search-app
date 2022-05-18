import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LocalStorageRecordDataSourceMapper } from '../../../../src/mappers/data-sources/LocalStorageRecordDataSourceMapper';
import { LocalStorageRecordProjectMapper } from '../../../../src/mappers/projects/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageDataSourceService } from '../../../../src/services/foundations/data-sources/LocalStorageDataSourceService';
import { LocalStorageProjectService } from '../../../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../../../src/services/foundations/router/NextRouterService';
import { Head } from '../../../../src/views/bases/head/Head';
import { Scripts } from '../../../../src/views/bases/scripts/Scripts';
import { ViewDataPage } from '../../../../src/views/pages/data/view-data/ViewDataPage';

const ViewData: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const projectService = new LocalStorageProjectService(
        new LocalStorageRepository('projects'),
        new LocalStorageRecordProjectMapper()
    );
    const dataSourceService = new LocalStorageDataSourceService(
        new LocalStorageRepository('DataSources'),
        new LocalStorageRecordDataSourceMapper()
    );
    const routerService = new NextRouterService(router);

    return (
        <>
            <Head title="Pillars Research Service" />
            <ViewDataPage
                dataSourceService={dataSourceService}
                projectId={id}
                projectService={projectService}
                routerService={routerService}
            />
            <Scripts />
        </>
    );
};

export default ViewData;
