import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IProjectListProps {
    projectsService: IProjectService;
    onCreateProject: () => void;
}
