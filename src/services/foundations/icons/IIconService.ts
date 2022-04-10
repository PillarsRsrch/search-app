import { ReactElement } from 'react';

export interface IIconService {
    getIcon(name: string): ReactElement;
}
