import { IState } from './IState';

export interface ITransitionMap {
    addTransition(input: string, nextState: IState): boolean;
    lookupNextState(input: string): IState;
}
