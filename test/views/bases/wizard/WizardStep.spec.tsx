import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { instance, mock, reset, when } from 'ts-mockito';
import { IWizardService } from '../../../../src/services/foundations/wizard/IWizardService';
import React from 'react';
import { FakeWizardStep } from './FakeWizardStep';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';

describe('Wizard Step Test Suite', () => {
    const mockedService = mock<IWizardService>();
    const mockedStep = mock<IWizardStep>();
    const service = instance(mockedService);
    const step = instance(mockedStep);
    const onNext = jest.fn();
    const onPrevious = jest.fn();

    beforeEach(() => {
        reset(mockedService);
        onNext.mockReset();
        onPrevious.mockReset();
    });

    test('Should render a wizard step', () => {
        render(
            <FakeWizardStep
                i={0}
                service={service}
                step={step}
                onNext={onNext}
                onPrevious={onPrevious}
            />
        );

        const next = screen.getByText<HTMLButtonElement>('Next');
        const previous = screen.getByText<HTMLButtonElement>('Previous');
        const stepText = screen.getByText('Step 0');

        expect(stepText).toBeInTheDocument();
        expect(next).toBeInTheDocument();
        expect(next.disabled).toBeTruthy();
        expect(previous).toBeInTheDocument();
        expect(previous.disabled).toBeTruthy();
    });

    test('Should click the next button', () => {
        when(mockedService.hasNextStep()).thenReturn(true);
        render(
            <FakeWizardStep
                i={0}
                service={service}
                step={step}
                onNext={onNext}
                onPrevious={onPrevious}
            />
        );

        const next = screen.getByText<HTMLButtonElement>('Next');
        fireEvent.click(next);

        expect(next).toBeInTheDocument();
        expect(next.disabled).toBeFalsy();
        expect(onNext).toHaveBeenCalled();
    });

    test('Should click the previous button', () => {
        when(mockedService.hasPreviousStep()).thenReturn(true);
        render(
            <FakeWizardStep
                i={0}
                service={service}
                step={step}
                onNext={onNext}
                onPrevious={onPrevious}
            />
        );

        const previous = screen.getByText<HTMLButtonElement>('Previous');
        fireEvent.click(previous);

        expect(previous).toBeInTheDocument();
        expect(previous.disabled).toBeFalsy();
        expect(onPrevious).toHaveBeenCalled();
    });
});
