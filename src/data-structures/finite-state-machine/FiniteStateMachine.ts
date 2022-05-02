import { IFiniteStateMachine } from './IFiniteStateMachine';
import { IState } from './IState';
import { StateType } from './StateType';

export class FiniteStateMachine implements IFiniteStateMachine {
    private state: IState;
    private readonly states: Map<string, IState> = new Map();

    constructor(
        startingState: IState,
        states: Map<string, IState> = new Map()
    ) {
        this.state = startingState;
        this.states = states;
        this.states.set(startingState.id(), startingState);
    }

    addTransition(from: IState, to: IState, input: string): boolean {
        const fromStateInFSM = this.verifyStateExists(from);
        this.states.set(to.id(), to);
        fromStateInFSM.addTransition(input, to);
        return true;
    }

    private verifyStateExists(state: IState) {
        if (!this.states.has(state.id())) {
            throw new Error(
                `Can not add transition because state '${state.id()}' does not exist in the state machine.`
            );
        }
        return this.states.get(state.id()) as IState;
    }

    currentState(): IState {
        return this.state;
    }

    isInAcceptingState(): boolean {
        return this.state.type() === StateType.Accepting;
    }

    step(input: string): void {
        this.state = this.state.transition(input);
    }
}
