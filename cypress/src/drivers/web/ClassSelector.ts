import { ISelector } from './ISelector';

export class ClassSelector implements ISelector {
    constructor(private readonly className: string) {}

    toString(): string {
        return `.${this.className}`;
    }
}
