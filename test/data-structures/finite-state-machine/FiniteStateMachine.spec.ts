import { instance, mock, reset, verify, when } from 'ts-mockito';
import { FiniteStateMachine } from '../../../src/data-structures/finite-state-machine/FiniteStateMachine';
import { IState } from '../../../src/data-structures/finite-state-machine/IState';
import { StateType } from '../../../src/data-structures/finite-state-machine/StateType';

describe('Finite State Machine Test Suite', () => {
    const mockedState = mock<IState>();
    const state1 = instance(mockedState);

    beforeEach(() => {
        reset(mockedState);
    });

    describe('addTransition', () => {
        test('Should add a transition to the start state in the fsm', () => {
            const mockedState2 = mock<IState>();
            const state2 = instance(mockedState2);
            when(mockedState.id()).thenReturn('q0');
            when(mockedState.transition('0')).thenReturn(state2);
            when(mockedState2.type()).thenReturn(StateType.Accepting);
            when(mockedState2.id()).thenReturn('q1');
            const finiteStateMachine = new FiniteStateMachine(state1);

            finiteStateMachine.addTransition(state1, state2, '0');
            finiteStateMachine.step('0');

            verify(mockedState.addTransition('0', state2)).once();
            expect(finiteStateMachine.isInAcceptingState()).toBeTruthy();
        });

        test('Should add a transition to an exisiting state in the fsm', () => {
            const mockedState2 = mock<IState>();
            const state2 = instance(mockedState2);
            when(mockedState.id()).thenReturn('q0');
            when(mockedState.type()).thenReturn(StateType.Regular);
            when(mockedState.transition('0')).thenReturn(state2);
            when(mockedState2.id()).thenReturn('q1');
            when(mockedState2.type()).thenReturn(StateType.Accepting);
            when(mockedState2.transition('1')).thenReturn(state1);
            const finiteStateMachine = new FiniteStateMachine(
                state1,
                new Map([['q1', state2]])
            );

            finiteStateMachine.addTransition(state1, state2, '0');
            finiteStateMachine.addTransition(state2, state1, '1');
            finiteStateMachine.step('0');
            finiteStateMachine.step('1');

            verify(mockedState2.addTransition('1', state1)).once();
            verify(mockedState.addTransition('0', state2)).once();
            expect(finiteStateMachine.isInAcceptingState()).toBeFalsy();
        });

        test('Should throw when adding a transition from a non existant state', () => {
            const finiteStateMachine = new FiniteStateMachine(state1);
            const mockedState2 = mock<IState>();
            const state2 = instance(mockedState2);
            when(mockedState.id()).thenReturn('q0');
            when(mockedState2.id()).thenReturn('q1');

            expect(() =>
                finiteStateMachine.addTransition(state2, state1, '0')
            ).toThrowError(
                new Error(
                    `Can not add transition because state '${state2.id()}' does not exist in the state machine.`
                )
            );
        });
    });

    describe('constructor', () => {
        test('Should add an accepting state, which should also be the current state', () => {
            const finiteStateMachine = new FiniteStateMachine(state1);
            when(mockedState.equals(state1)).thenReturn(true);

            const currentState = finiteStateMachine.currentState();

            expect(currentState.equals(state1)).toBeTruthy();
        });
    });

    describe('isInAcceptingState', () => {
        test('Should add an accepting state to the finite state machine', () => {
            when(mockedState.type()).thenReturn(StateType.Accepting);
            const finiteStateMachine = new FiniteStateMachine(state1);

            expect(finiteStateMachine.isInAcceptingState()).toBeTruthy();
        });
    });

    describe('run', () => {
        test('Should step the state machine forward on the input', () => {
            const mockState2 = mock<IState>();
            const state2 = instance(mockState2);
            when(mockedState.transition('0')).thenReturn(state2);
            when(mockState2.equals(state2)).thenReturn(true);
            const finiteStateMachine = new FiniteStateMachine(state1);

            finiteStateMachine.step('0');

            expect(finiteStateMachine.currentState().equals(state2));
        });
    });
});
