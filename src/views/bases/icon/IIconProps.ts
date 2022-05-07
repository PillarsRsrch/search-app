import { IIconService } from '../../../services/foundations/icons/IIconService';
import { IconSize } from './IconSize';

export interface IIconProps {
    name: string;
    size: IconSize;
    service: IIconService;
}
