import { ISelector } from './ISelector';

export class IdSelector implements ISelector {
    constructor(private readonly id: string) {}

    toString(): string {
        return `#${this.id}`;
    }
}
