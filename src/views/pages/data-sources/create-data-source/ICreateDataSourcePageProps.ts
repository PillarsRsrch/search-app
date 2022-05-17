import { IMapper } from '../../../../mappers/IMapper';
import { IDataSource } from '../../../../models/data/IDataSource';
import { IForm } from '../../../../models/form/IForm';
import { IDataSourceService } from '../../../../services/foundations/data-sources/IDataSourceService';
import { IGoogleDriveService } from '../../../../services/foundations/google-drive/IGoogleDriveService';
import { IRouterService } from '../../../../services/foundations/router/IRouterService';

export interface ICreateDataSourcePageProps {
    projectId: string;
    dataSourceService: IDataSourceService;
    formMapper: IMapper<IForm, IDataSource>;
    routerService: IRouterService;
    googleDriveService: IGoogleDriveService;
}
