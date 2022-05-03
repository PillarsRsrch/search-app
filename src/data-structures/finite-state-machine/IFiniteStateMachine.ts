import { IState } from './IState';

export interface IFiniteStateMachine {
    addTransition(from: IState, to: IState, transition: string): boolean;
    currentState(): IState;
    isInAcceptingState(): boolean;
    setStartingState(state: IState): void;
    setState(state: IState): void;
    step(input: string): void;
}
