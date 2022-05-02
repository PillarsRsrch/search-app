import { IEquatable } from '../../operations/IEquatable';
import { StateType } from './StateType';

export interface IState extends IEquatable<IState> {
    id(): string;
    type(): StateType;
    transition(input: string): IState;
    addTransition(input: string, nextState: IState): boolean;
}
