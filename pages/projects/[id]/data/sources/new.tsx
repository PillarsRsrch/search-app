import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormDataSourceMapper } from '../../../../../src/mappers/data-sources/FormDataSourceMapper';
import { LocalStorageRecordDataSourceMapper } from '../../../../../src/mappers/data-sources/LocalStorageRecordDataSourceMapper';
import { JSONGoogleDriveMapper } from '../../../../../src/mappers/google-drive/JSONGoogleDriveMapper';
import { AsyncGoogleDriveRepository } from '../../../../../src/repositories/google-drive/AsyncGoogleDriveRepository';
import { LocalStorageRepository } from '../../../../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageDataSourceService } from '../../../../../src/services/foundations/data-sources/LocalStorageDataSourceService';
import { GoogleDriveService } from '../../../../../src/services/foundations/google-drive/GoogleDriveService';
import { NextRouterService } from '../../../../../src/services/foundations/router/NextRouterService';
import { Head } from '../../../../../src/views/bases/head/Head';
import { Scripts } from '../../../../../src/views/bases/scripts/Scripts';
import { CreateDataSourcePage } from '../../../../../src/views/pages/data-sources/create-data-source/CreateDataSourcePage';

const NewSource: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const routerService = new NextRouterService(router);
    const mapper = new FormDataSourceMapper();
    const dataSourceService = new LocalStorageDataSourceService(
        new LocalStorageRepository('DataSources'),
        new LocalStorageRecordDataSourceMapper()
    );
    const googleDriveService = new GoogleDriveService(
        new AsyncGoogleDriveRepository(),
        new JSONGoogleDriveMapper()
    );

    return (
        <>
            <Head title="Pillars Research Service" />
            <CreateDataSourcePage
                projectId={id}
                googleDriveService={googleDriveService}
                routerService={routerService}
                formMapper={mapper}
                dataSourceService={dataSourceService}
            />
            <Scripts />
        </>
    );
};

export default NewSource;
