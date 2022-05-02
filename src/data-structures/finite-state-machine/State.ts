import { IState } from './IState';
import { ITransitionMap } from './ITransitionMap';
import { StateType } from './StateType';
import { TransitionMap } from './TransitionMap';

export class State implements IState {
    constructor(
        private readonly stateId: string,
        private readonly transitions: ITransitionMap = new TransitionMap()
    ) {}

    addTransition(input: string, nextState: IState): boolean {
        this.transitions.addTransition(input, nextState);
        return true;
    }

    equals(other: IState): boolean {
        return this.id() === other.id();
    }

    id(): string {
        return this.stateId;
    }

    transition(input: string): IState {
        return this.transitions.lookupNextState(input);
    }

    type(): StateType {
        return StateType.Regular;
    }
}
