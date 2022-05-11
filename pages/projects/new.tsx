import { NextPage } from 'next';
import { FormProjectMapper } from '../../src/mappers/project/FormProjectMapper';
import { LocalStorageRecordProjectMapper } from '../../src/mappers/project/LocalStorageRecordProjectMapper';
import { LocalStorageRepository } from '../../src/repositories/local-storage/LocalStorageRepository';
import { LocalStorageProjectService } from '../../src/services/foundations/projects/LocalStorageProjectService';
import { CreateProjectPage } from '../../src/views/pages/projects/create-project/CreateProjectPage';

const NewProject: NextPage = () => {
    const projectService = new LocalStorageProjectService(
        new LocalStorageRepository('projects'),
        new LocalStorageRecordProjectMapper()
    );
    const projectMapper = new FormProjectMapper();

    return (
        <CreateProjectPage
            projectMapper={projectMapper}
            projectService={projectService}
        />
    );
};

export default NewProject;
