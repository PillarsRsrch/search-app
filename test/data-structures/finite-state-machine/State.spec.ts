import { instance, mock, reset, when } from 'ts-mockito';
import { ITransitionMap } from '../../../src/data-structures/finite-state-machine/ITransitionMap';
import { State } from '../../../src/data-structures/finite-state-machine/State';
import { StateType } from '../../../src/data-structures/finite-state-machine/StateType';

describe('State Test Suite', () => {
    const mockTransitionMap = mock<ITransitionMap>();
    const transitionMap = instance(mockTransitionMap);

    beforeEach(() => {
        reset(mockTransitionMap);
    });

    describe('addTransition', () => {
        test('Should add a transition to the current state', () => {
            const state = new State('q0');
            const expectedNextState = new State('q1');
            const transitionState = expectedNextState;

            state.addTransition('0', transitionState);

            const actualNextState = state.transition('0');
            expect(actualNextState).toEqual(expectedNextState);
        });
    });

    describe('id', () => {
        test('Should set the id of the state', () => {
            const state = new State('q0', transitionMap);

            expect(state.id()).toEqual('q0');
        });
    });

    describe('type', () => {
        test('Should set the type of the state', () => {
            const state = new State('q0', transitionMap);

            expect(state.type()).toEqual(StateType.Regular);
        });
    });

    describe('transition', () => {
        test('Should get the next state from the input', () => {
            const input = '0';
            const expectedNextState = new State('q1', transitionMap);
            const transitionState = expectedNextState;
            when(mockTransitionMap.lookupNextState(input)).thenReturn(
                transitionState
            );
            const state = new State('q0', transitionMap);

            const actualNextState = state.transition(input);

            expect(actualNextState);
        });
    });

    describe('equals', () => {
        test('Should test the equality operator for state', () => {
            const stateA = new State('q0', transitionMap);
            const stateB = new State('q1', transitionMap);
            const stateC = new State('q1', transitionMap);

            expect(stateA.equals(stateB)).toBeFalsy();
            expect(stateB.equals(stateC)).toBeTruthy();
        });
    });
});
