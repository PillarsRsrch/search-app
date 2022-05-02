import { ITransitionInput } from './ITransitionInput';

export class TransitionInput implements ITransitionInput {
    public static readonly Default = new TransitionInput('*');

    constructor(private readonly value: string) {}

    toString(): string {
        return this.value;
    }
}
