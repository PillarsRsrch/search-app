import { IProjectService } from '../../../../services/foundations/projects/IProjectService';

export interface IProjectDisplayProps {
    projectsService: IProjectService;
    onCreateProject: () => void;
}
