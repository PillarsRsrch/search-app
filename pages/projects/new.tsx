import { NextPage } from 'next';
import { IProjectsService } from '../../src/services/foundations/projects/IProjectsService';
import { CreateProjectPage } from '../../src/views/pages/projects/create-project/CreateProjectPage';

const NewProject: NextPage = () => {
    const project: IProjectsService = {
        getAllServicesAsync: () => Promise.resolve([]),
    };

    return <CreateProjectPage />;
};

export default NewProject;
