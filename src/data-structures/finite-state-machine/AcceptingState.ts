import { State } from './State';
import { StateType } from './StateType';

export class AcceptingState extends State {
    type(): StateType {
        return StateType.Accepting;
    }
}
