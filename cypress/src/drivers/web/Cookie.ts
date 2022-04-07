import { ICookie } from './ICookie';

export class Cookie implements ICookie {
    constructor(public readonly key: string) {}
}
