import { ReactElement } from 'react';
import { IRepository } from '../IRepository';
import { InMemoryIconStore } from './types/InMemoryIconStore';

export class InMemoryIconRepository implements IRepository<ReactElement> {
    constructor(private readonly icons: InMemoryIconStore) {}

    create(model: ReactElement): ReactElement {
        throw new Error('Method not implemented.');
    }

    getAll(): ReactElement[] {
        throw new Error('Method not implemented');
    }

    getById(id: string): ReactElement {
        return this.icons.get(id) as ReactElement;
    }
}
