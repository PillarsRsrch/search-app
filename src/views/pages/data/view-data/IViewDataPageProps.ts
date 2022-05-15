import { IDataSourceService } from '../../../../services/foundations/data-sources/IDataSourceService';
import { IProjectService } from '../../../../services/foundations/projects/IProjectService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface IViewDataPageProps {
    dataSourceService: IDataSourceService;
    routerService: IRouterService;
    projectService: IProjectService;
    projectId: string;
}
