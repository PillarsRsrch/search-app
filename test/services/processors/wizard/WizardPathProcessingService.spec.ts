import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { TransitionInput } from '../../../../src/models/wizards/TransitionInput';
import { IWizardBuilderService } from '../../../../src/services/foundations/wizard/IWizardBuilderService';
import { WizardPathProcessingService } from '../../../../src/services/processors/wizard/WizardPathProcessingService';
import { WizardStepType } from '../../../../src/views/bases/wizard/WizardStepType';

describe('Wizard Path Processing Service', () => {
    const mockedService = mock<IWizardBuilderService>();
    const mockedStep = mock<IWizardStep>();
    const foundationService = instance(mockedService);
    const step = instance(mockedStep);
    const service = new WizardPathProcessingService(foundationService);

    beforeEach(() => {
        reset(mockedService);
        reset(mockedStep);
        when(mockedStep.equals(step)).thenReturn(true);
    });

    describe('getCurrentStep', () => {
        test('Should get the current step', () => {
            when(mockedService.getCurrentStep()).thenReturn(step);

            const currentStep = service.getCurrentStep();

            verify(mockedService.getCurrentStep()).once();
            expect(currentStep).not.toBeNull();
        });
    });

    describe('getNextStep', () => {
        test('Should generate step in the path if there are no next steps', () => {
            when(mockedService.step(TransitionInput.Default)).thenReturn();
            when(mockedService.getCurrentStep()).thenReturn(step);

            const nextStep = service.getNextStep(TransitionInput.Default);

            verify(mockedService.step(TransitionInput.Default)).once();
            expect(nextStep).not.toBeNull();
        });

        test('Should get next step and not diverge from the path', () => {
            when(mockedService.step(TransitionInput.Default)).thenReturn();
            when(mockedService.getCurrentStep()).thenReturn(step);
            when(mockedStep.id()).thenReturn('step_0');

            service.getNextStep(TransitionInput.Default);
            service.getPreviousStep();
            const nextStep = service.getNextStep(TransitionInput.Default);

            verify(mockedService.step(TransitionInput.Default)).twice();
            expect(nextStep).not.toBeNull();
        });

        test('Should get next step and diverge from the path', () => {
            const mockedStep2 = mock<IWizardStep>();
            const step2 = instance(mockedStep2);
            when(mockedService.step(anything())).thenReturn();
            when(mockedService.getCurrentStep()).thenReturn(step, step2);
            when(mockedStep.id()).thenReturn('step_0');
            when(mockedStep2.id()).thenReturn('step_1');

            service.getNextStep(TransitionInput.Default);
            service.getPreviousStep();
            const nextStep = service.getNextStep(TransitionInput.Default);

            verify(mockedService.step(TransitionInput.Default)).twice();
            expect(nextStep).not.toBeNull();
        });
    });

    describe('getPreviousStep', () => {
        test('Should get the previous step in the path', () => {
            when(mockedService.getCurrentStep()).thenReturn(step);
            when(mockedService.step(TransitionInput.Default)).thenReturn();
            service.getNextStep(TransitionInput.Default);

            const previousStep = service.getPreviousStep();

            verify(mockedService.setStep(step)).once();
            expect(previousStep).not.toBeNull();
        });
    });

    describe('hasNextStep', () => {
        test('Should be true when the current step is a submitting step', () => {
            when(mockedStep.type()).thenReturn(WizardStepType.Submit);
            when(mockedService.getCurrentStep()).thenReturn(step);

            const hasNextStep = service.hasNextStep();

            expect(hasNextStep).toBeFalsy();
        });

        test('Should be false when the current step is a form step', () => {
            when(mockedStep.type()).thenReturn(WizardStepType.Form);
            when(mockedService.getCurrentStep()).thenReturn(step);

            const hasNextStep = service.hasNextStep();

            expect(hasNextStep).toBeTruthy();
        });
    });

    describe('hasPreviousStep', () => {
        test('Should be true when there is a previous step', () => {
            when(mockedService.getCurrentStep()).thenReturn(step);
            service.getNextStep(TransitionInput.Default);

            const hasPreviousStep = service.hasPreviousStep();

            expect(hasPreviousStep).toBeTruthy();
        });

        test('Should be false when there is no previous step', () => {
            when(mockedService.getCurrentStep()).thenReturn(step);

            const hasPreviousStep = service.hasPreviousStep();

            expect(hasPreviousStep).toBeTruthy();
        });
    });

    describe('isInSubmitableState', () => {
        test('Should be true when the current step is a submitting step', () => {
            when(mockedStep.type()).thenReturn(WizardStepType.Submit);
            when(mockedService.getCurrentStep()).thenReturn(step);

            const isSubmitable = service.isInSubmitableState();

            expect(isSubmitable).toBeTruthy();
        });

        test('Should be false when the current step is a form step', () => {
            when(mockedStep.type()).thenReturn(WizardStepType.Form);
            when(mockedService.getCurrentStep()).thenReturn(step);

            const isSubmitable = service.isInSubmitableState();

            expect(isSubmitable).toBeFalsy();
        });
    });
});
