import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormProjectMapper } from '../../src/mappers/projects/FormProjectMapper';
import { LocalStorageRecordProjectMapper } from '../../src/mappers/projects/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { NextRouterService } from '../../src/services/foundations/router/NextRouterService';
import { CreateProjectPage } from '../../src/views/pages/projects/create-project/CreateProjectPage';

const NewProject: NextPage = () => {
    const router = useRouter();
    const projectService = new LocalStorageProjectService(
        new LocalStorageRepository('projects'),
        new LocalStorageRecordProjectMapper()
    );
    const projectMapper = new FormProjectMapper();
    const routerService = new NextRouterService(router);

    return (
        <CreateProjectPage
            routerService={routerService}
            projectMapper={projectMapper}
            projectService={projectService}
        />
    );
};

export default NewProject;
