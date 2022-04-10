import { ReactElement } from 'react';
import { IRepository } from '../IRepository';
import { InMemoryIconStore } from './types/InMemoryIconStore';

export class IconRepository implements IRepository<ReactElement> {
    constructor(private readonly icons: InMemoryIconStore) {}

    getById(id: string): ReactElement {
        return this.icons.get(id) as ReactElement;
    }
}