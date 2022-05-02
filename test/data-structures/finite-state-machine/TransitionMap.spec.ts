import { instance, mock, when } from 'ts-mockito';
import { IState } from '../../../src/data-structures/finite-state-machine/IState';
import { TransitionMap } from '../../../src/data-structures/finite-state-machine/TransitionMap';

describe('Transition Map Test Suite', () => {
    const mockState = mock<IState>();
    const predefinedState = instance(mockState);
    const predefinedTransitions = new Map([['0', predefinedState]]);

    describe('lookupNextState', () => {
        test('Should get the next state when it the input exists in the map', () => {
            const expectedNextState = predefinedState;
            const transitionMap = new TransitionMap(predefinedTransitions);
            when(mockState.id()).thenReturn('q0');
            when(mockState.transition('0')).thenReturn(mockState);
            when(mockState.equals(expectedNextState)).thenReturn(true);

            const actualNextState = transitionMap.lookupNextState('0');

            expect(actualNextState.equals(expectedNextState)).toBeTruthy();
        });

        test('Should throw an exception when the input is not in the map', () => {
            const input = '1';
            const expectedException = new Error(
                `No transition for symbol '${input}'.`
            );
            const transitionMap = new TransitionMap();

            expect(() => transitionMap.lookupNextState(input)).toThrowError(
                expectedException
            );
        });
    });

    describe('addTransition', () => {
        test('Should add a transition to the map', () => {
            const expectedNextState = predefinedState;
            const transitionMap = new TransitionMap();
            when(mockState.id()).thenReturn('q0');
            when(mockState.transition('0')).thenReturn(mockState);
            when(mockState.equals(expectedNextState)).thenReturn(true);

            transitionMap.addTransition('0', predefinedState);

            const state = transitionMap.lookupNextState('0');
            expect(state.equals(expectedNextState)).toBeTruthy();
        });

        test('Should throw an exception when adding a transition on an existing input', () => {
            const input = '0';
            const transitionMap = new TransitionMap(predefinedTransitions);
            const expectedException = new Error(
                `Conflicting transition for symbol '${input}'.`
            );

            expect(() =>
                transitionMap.addTransition(input, predefinedState)
            ).toThrowError(expectedException);
        });
    });
});
