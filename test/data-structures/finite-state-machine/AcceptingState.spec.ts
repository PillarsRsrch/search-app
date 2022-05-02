import { AcceptingState } from '../../../src/data-structures/finite-state-machine/AcceptingState';
import { instance, mock, reset } from 'ts-mockito';
import { ITransitionMap } from '../../../src/data-structures/finite-state-machine/ITransitionMap';
import { StateType } from '../../../src/data-structures/finite-state-machine/StateType';

describe('Accepting State Test Suite', () => {
    const mockTransitionMap = mock<ITransitionMap>();
    const transitionMap = instance(mockTransitionMap);

    beforeEach(() => {
        reset(mockTransitionMap);
    });

    describe('type', () => {
        test('Should set state type to be accepting', () => {
            const state = new AcceptingState('q0', transitionMap);

            expect(state.type()).toEqual(StateType.Accepting);
        });
    });
});
