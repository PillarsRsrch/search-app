import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IWizardService } from '../../../../src/services/foundations/wizard/IWizardService';
import { Wizard } from '../../../../src/views/bases/wizard/Wizard';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { WizardStepType } from '../../../../src/views/bases/wizard/WizardStepType';
import { FakeWizardStep } from './FakeWizardStep';

describe('Wizard Base Component Test Suite', () => {
    const mockedWizardService = mock<IWizardService>();
    const mockedWizardStep = mock<IWizardStep>();
    const wizardService = instance(mockedWizardService);
    const wizardStep = instance(mockedWizardStep);
    const onCancel = jest.fn();
    const onSubmit = jest.fn();

    beforeEach(() => {
        reset(mockedWizardService);
        reset(mockedWizardStep);
        onCancel.mockReset();
        onSubmit.mockReset();
    });

    test('Should render the starting state of the wizard', () => {
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );

        const title = screen.getByText('Wizard');
        const step = screen.getByText('Step 1');
        const cancel = screen.getByText('Cancel');
        const submit = screen.getByText<HTMLButtonElement>('Submit');

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        expect(title).toBeInTheDocument();
        expect(step).toBeInTheDocument();
        expect(cancel).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
        expect(submit.disabled).toBeTruthy();
    });

    test('Should call the cancel function', () => {
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );

        const cancel = screen.getByText('Cancel');
        fireEvent.click(cancel);

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        expect(cancel).toBeInTheDocument();
        expect(onCancel).toHaveBeenCalled();
    });

    test('Should call the submit function', () => {
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Submit);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );

        const submit = screen.getByText<HTMLButtonElement>('Submit');
        fireEvent.click(submit);

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        expect(submit).toBeInTheDocument();
        expect(submit.disabled).toBeFalsy();
        expect(onSubmit).toHaveBeenCalled();
    });

    test('Should call the submit function', () => {
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(mockedWizardStep.type()).thenReturn(WizardStepType.Form);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );

        const cancel = screen.getByText('Cancel');
        fireEvent.click(cancel);

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        expect(cancel).toBeInTheDocument();
        expect(onCancel).toHaveBeenCalled();
    });

    test('Should render the next state of the wizard', () => {
        const mockedNextStep = mock<IWizardStep>();
        const nextStep = instance(mockedNextStep);
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(
            mockedNextStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={nextStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={2}
            />
        ));
        when(mockedWizardService.getNextStep(anything())).thenReturn(nextStep);
        when(mockedWizardService.hasNextStep()).thenReturn(true);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );
        const next = screen.getByText('Next') as HTMLButtonElement;

        fireEvent.click(next);
        const step = screen.getByText('Step 2');

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        verify(mockedWizardService.getNextStep(anything())).once();
        expect(step).toBeInTheDocument();
    });

    test('Should return to the previous state of the wizard', () => {
        const mockedPreviousStep = mock<IWizardStep>();
        const previousStep = instance(mockedPreviousStep);
        when(mockedWizardService.getCurrentStep()).thenReturn(wizardStep);
        when(
            mockedWizardStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={wizardStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={1}
            />
        ));
        when(
            mockedPreviousStep.component(anything(), anything(), anything())
        ).thenCall((service, onNext, onPrevious) => (
            <FakeWizardStep
                step={previousStep}
                service={service}
                onNext={onNext}
                onPrevious={onPrevious}
                i={0}
            />
        ));
        when(mockedWizardService.getPreviousStep()).thenReturn(previousStep);
        when(mockedWizardService.hasNextStep()).thenReturn(false);
        when(mockedWizardService.hasPreviousStep()).thenReturn(true);
        render(
            <Wizard
                onCancel={onCancel}
                onSubmit={onSubmit}
                service={wizardService}
                title={'Wizard'}
            />
        );
        const previous = screen.getByText('Previous') as HTMLButtonElement;

        fireEvent.click(previous);
        const step = screen.getByText('Step 0');

        verify(mockedWizardService.getCurrentStep()).atLeast(1);
        verify(mockedWizardService.getPreviousStep()).once();
        expect(step).toBeInTheDocument();
    });
});
