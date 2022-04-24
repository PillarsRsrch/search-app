import { IProjectsService } from '../../../../services/foundations/projects/IProjectsService';

export interface IProjectDisplayProps {
    projectsService: IProjectsService;
    onCreateProject: () => void;
}
