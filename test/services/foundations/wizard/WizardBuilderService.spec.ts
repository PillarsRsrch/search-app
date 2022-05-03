import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IFiniteStateMachine } from '../../../../src/data-structures/finite-state-machine/IFiniteStateMachine';
import { IState } from '../../../../src/data-structures/finite-state-machine/IState';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { TransitionInput } from '../../../../src/models/wizards/TransitionInput';
import { WizardBuilderService } from '../../../../src/services/foundations/wizard/WizardBuilderService';
import { WizardStepType } from '../../../../src/views/bases/wizard/WizardStepType';

describe('Wizard Builder Service Test Suite', () => {
    const mockedFiniteStateMachine = mock<IFiniteStateMachine>();
    const finiteStateMachine = instance(mockedFiniteStateMachine);
    const service = new WizardBuilderService(finiteStateMachine);

    beforeEach(() => {
        reset(mockedFiniteStateMachine);
    });

    describe('addStep', () => {
        test('Should add the transition to the fsm', () => {
            const mockedStepA = mock<IWizardStep>();
            const mockedStateA = mock<IState>();
            const mockedStepB = mock<IWizardStep>();
            const mockedStateB = mock<IState>();
            const stepA = instance(mockedStepA);
            const stateA = instance(mockedStateA);
            const stepB = instance(mockedStepB);
            const stateB = instance(mockedStateB);
            const transition = TransitionInput.Default;
            when(mockedStepA.createState()).thenReturn(stateA);
            when(mockedStepB.createState()).thenReturn(stateB);

            const result = service.addStep(stepA, stepB, transition);

            verify(
                mockedFiniteStateMachine.addTransition(
                    anything(),
                    anything(),
                    anything()
                )
            ).once();
            expect(result).toBeTruthy();
        });
    });

    describe('getCurrentStep', () => {
        test('Should get the current step', () => {
            const mockedStep = mock<IWizardStep>();
            const mockedState = mock<IState>();
            const step = instance(mockedStep);
            const state = instance(mockedState);
            when(mockedState.id()).thenReturn('step_0');
            when(mockedStep.id()).thenReturn('step_0');
            when(mockedFiniteStateMachine.currentState()).thenReturn(state);
            service.setStartingStep(step);

            const currentStep = service.getCurrentStep();

            expect(currentStep.id()).toEqual('step_0');
        });
    });

    describe('isInSubmittingStep', () => {
        test('Should be true when the current step is a submitting step', () => {
            const mockedStep = mock<IWizardStep>();
            const mockedState = mock<IState>();
            const step = instance(mockedStep);
            const state = instance(mockedState);
            when(mockedState.id()).thenReturn('step_0');
            when(mockedStep.id()).thenReturn('step_0');
            when(mockedStep.type()).thenReturn(WizardStepType.Submit);
            when(mockedFiniteStateMachine.currentState()).thenReturn(state);
            service.setStartingStep(step);

            const isSubmitting = service.isInSubmittingStep();

            expect(isSubmitting).toBeTruthy();
        });
    });

    describe('setState', () => {
        test('Should set state', () => {
            const mockedStep = mock<IWizardStep>();
            const step = instance(mockedStep);
            when(mockedStep.id()).thenReturn('step_0');

            service.setStep(step);

            verify(mockedFiniteStateMachine.setState(anything())).once();
        });
    });

    describe('step', () => {
        test('Should step the finite state machine', () => {
            service.step(TransitionInput.Default);

            verify(mockedFiniteStateMachine.step('*')).once();
        });
    });
});
