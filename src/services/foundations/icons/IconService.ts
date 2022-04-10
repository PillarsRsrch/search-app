import { ReactElement } from 'react';
import { IRepository } from '../../../repositories/IRepository';
import { IIconService } from './IIconService';

export class IconService implements IIconService {
    constructor(private readonly repository: IRepository<ReactElement>) {}

    getIcon(name: string): ReactElement {
        return this.repository.getById(name);
    }
}
