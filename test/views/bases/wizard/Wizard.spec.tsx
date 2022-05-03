import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { Wizard } from '../../../../src/views/bases/wizard/Wizard';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { WizardStepType } from '../../../../src/views/bases/wizard/WizardStepType';
import { FakeWizardStep } from './FakeWizardStep';
import { IWizardPathProcessingService } from '../../../../src/services/processors/wizard/IWizardPathProcessingService';
import { IWizardFormService } from '../../../../src/services/processors/wizard/IWizardFormService';

describe('Wizard Base Component Test Suite', () => {
    const mockedWizardPathService = mock<IWizardPathProcessingService>();
    const mockedWizardFormService = mock<IWizardFormService>();
    const mockedWizardStep = mock<IWizardStep>();
    const wizardPathService = instance(mockedWizardPathService);
    const wizardFormService = instance(mockedWizardFormService);
    const wizardStep = instance(mockedWizardStep);
    const onCancel = jest.fn();
    const onSubmit = jest.fn();

    beforeEach(() => {
        reset(mockedWizardFormService);
        reset(mockedWizardPathService);
        reset(mockedWizardStep);
        onCancel.mockReset();
        onSubmit.mockReset();
    });

    test('Should render the starting state of the wizard', () => {
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    formService={wizardFormService}
                    pathService={wizardPathService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );

        const title = screen.getByText('Wizard');
        const step = screen.getByText('Step 1');
        const cancel = screen.getByText('Cancel');
        const submit = screen.getByText<HTMLButtonElement>('Submit');

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        expect(title).toBeInTheDocument();
        expect(step).toBeInTheDocument();
        expect(cancel).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
        expect(submit.disabled).toBeTruthy();
    });

    test('Should call the cancel function', () => {
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    pathService={wizardPathService}
                    formService={wizardFormService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );

        const cancel = screen.getByText('Cancel');
        fireEvent.click(cancel);

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        expect(cancel).toBeInTheDocument();
        expect(onCancel).toHaveBeenCalled();
    });

    test('Should call the submit function', () => {
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardPathService.isInSubmitableState()).thenReturn(true);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    pathService={wizardPathService}
                    formService={wizardFormService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );

        const submit = screen.getByText<HTMLButtonElement>('Submit');
        fireEvent.click(submit);

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        expect(submit).toBeInTheDocument();
        expect(submit.disabled).toBeFalsy();
        expect(onSubmit).toHaveBeenCalled();
    });

    test('Should call the submit function', () => {
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    formService={wizardFormService}
                    pathService={wizardPathService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );

        const cancel = screen.getByText('Cancel');
        fireEvent.click(cancel);

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        expect(cancel).toBeInTheDocument();
        expect(onCancel).toHaveBeenCalled();
    });

    test('Should render the next state of the wizard', () => {
        const mockedNextStep = mock<IWizardStep>();
        const nextStep = instance(mockedNextStep);
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    pathService={wizardPathService}
                    formService={wizardFormService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        when(mockedNextStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={nextStep}
                    formService={wizardFormService}
                    pathService={wizardPathService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={2}
                />
            )
        );
        when(mockedWizardPathService.getNextStep(anything())).thenReturn(
            nextStep
        );
        when(mockedWizardPathService.hasNextStep()).thenReturn(true);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );
        const next = screen.getByText('Next') as HTMLButtonElement;

        fireEvent.click(next);
        const step = screen.getByText('Step 2');

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        verify(mockedWizardPathService.getNextStep(anything())).once();
        expect(step).toBeInTheDocument();
    });

    test('Should return to the previous state of the wizard', () => {
        const mockedPreviousStep = mock<IWizardStep>();
        const previousStep = instance(mockedPreviousStep);
        when(mockedWizardPathService.getCurrentStep()).thenReturn(wizardStep);
        when(mockedWizardStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={wizardStep}
                    pathService={wizardPathService}
                    formService={wizardFormService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={1}
                />
            )
        );
        when(mockedPreviousStep.component(anything(), anything())).thenCall(
            (onNext, onPrevious) => (
                <FakeWizardStep
                    step={previousStep}
                    pathService={wizardPathService}
                    formService={wizardFormService}
                    onNext={onNext}
                    onPrevious={onPrevious}
                    i={0}
                />
            )
        );
        when(mockedWizardPathService.getPreviousStep()).thenReturn(
            previousStep
        );
        when(mockedWizardPathService.hasPreviousStep()).thenReturn(true);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardPathService}
                title={'Wizard'}
            />
        );
        const previous = screen.getByText('Previous') as HTMLButtonElement;

        fireEvent.click(previous);
        const step = screen.getByText('Step 0');

        verify(mockedWizardPathService.getCurrentStep()).atLeast(1);
        verify(mockedWizardPathService.getPreviousStep()).once();
        expect(step).toBeInTheDocument();
    });
});
