import { ISelector } from './ISelector';

export class NameSelector implements ISelector {
    constructor(private readonly name: string) {}

    toString(): string {
        return `input[name="${this.name}"]`;
    }
}
