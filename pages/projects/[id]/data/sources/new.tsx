import { GetStaticPaths, NextPage } from 'next';
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
import { GoogleAPIScripts } from '../../../../../src/views/bases/google-api-scripts/GoogleAPIScripts';
import { CreateDataSourcePage } from '../../../../../src/views/pages/data-sources/create-data-source/CreateDataSourcePage';
import { IDataSourceNewPageProps } from '../../../../../src/page-props/IDataSourceNewPageProps';

const NewSource: NextPage<IDataSourceNewPageProps> = ({
    apiKey,
    clientId,
}: IDataSourceNewPageProps) => {
    const router = useRouter();
    const discoveryDocs = [
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    ];
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
            <GoogleAPIScripts
                apiKey={apiKey}
                clientId={clientId}
                discoveryDocs={discoveryDocs}
            />
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            apiKey: process.env.GOOGLE_API_KEY,
            clientId: process.env.GOOGLE_CLIENT_ID,
        },
    };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking', //indicates the type of fallback
    };
};

export default NewSource;
