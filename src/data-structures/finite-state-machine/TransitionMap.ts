import { IState } from './IState';
import { ITransitionMap } from './ITransitionMap';

export class TransitionMap implements ITransitionMap {
    constructor(
        private readonly transitionMap: Map<string, IState> = new Map()
    ) {}

    addTransition(input: string, nextState: IState): boolean {
        if (this.transitionMap.has(input)) {
            throw new Error(`Conflicting transition for symbol '${input}'.`);
        }
        this.transitionMap.set(input, nextState);
        return true;
    }

    lookupNextState(input: string): IState {
        if (!this.transitionMap.has(input)) {
            throw new Error(`No transition for symbol '${input}'.`);
        }
        return this.transitionMap.get(input) as IState;
    }
}
