import { IFiniteStateMachine } from './IFiniteStateMachine';
import { IState } from './IState';
import { StateType } from './StateType';

export class FiniteStateMachine implements IFiniteStateMachine {
    private state: IState | null;
    private readonly states: Map<string, IState> = new Map();

    constructor(states: Map<string, IState> = new Map()) {
        this.state = null;
        this.states = states;
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
                `State '${state.id()}' does not exist in the state machine.`
            );
        }
        return this.states.get(state.id()) as IState;
    }

    currentState(): IState {
        this.assertStartingStateIsSet();
        return this.state!;
    }

    private assertStartingStateIsSet() {
        if (this.state === null) {
            throw new Error('Starting state must be set');
        }
    }

    isInAcceptingState(): boolean {
        return this.currentState().type() === StateType.Accepting;
    }

    setStartingState(state: IState): void {
        this.assertMachineHasNotBeenRan();
        this.states.set(state.id(), state);
        this.state = state;
    }

    private assertMachineHasNotBeenRan() {
        if (this.state !== null) {
            throw new Error(
                'Can not set starting state after stepping the fsm'
            );
        }
    }

    setState(state: IState): void {
        this.state = this.verifyStateExists(state);
    }

    step(input: string): void {
        this.state = this.currentState().transition(input);
    }
}
