import { IPath } from './IPath';

export class Path implements IPath {
    constructor(public readonly value: string) {}
}
