import { IState } from './IState';

export interface IFiniteStateMachine {
    addTransition(from: IState, to: IState, transition: string): boolean;
    currentState(): IState;
    isInAcceptingState(): boolean;
    step(input: string): void;
}
