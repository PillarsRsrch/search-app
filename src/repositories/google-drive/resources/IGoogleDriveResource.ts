import { IBackgroundImageFileResource } from './IBackgroundImageFileResource';
import { ICapabilitiesResource } from './ICapabilitiesResource';
import { IRestrictionsResource } from './IRestrictionsResource';

export interface IGoogleDriveResource {
    kind: string;
    id: string;
    name: string;
    themeId: string;
    colorRgb: string;
    backgroundImageFile: IBackgroundImageFileResource;
    backgroundImageLink: string;
    capabilities: ICapabilitiesResource;
    createdTime: Date;
    orgUnitId: string;
    hidden: boolean;
    restrictions: IRestrictionsResource;
}
