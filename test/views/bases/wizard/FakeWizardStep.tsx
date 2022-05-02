import React from 'react';
import { WizardStep } from '../../../../src/views/bases/wizard/WizardStep';
import { TransitionInput } from '../../../../src/models/wizards/TransitionInput';
import { ITransitionInput } from '../../../../src/models/wizards/ITransitionInput';
import { IForm } from '../../../../src/models/form/IForm';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { IWizardService } from '../../../../src/services/foundations/wizard/IWizardService';

interface FakeWizardStepProps {
    i: number;
    step: IWizardStep;
    onNext: (transition: ITransitionInput, form: IForm) => void;
    onPrevious: () => void;
    service: IWizardService;
}

export const FakeWizardStep = ({
    step,
    service,
    onNext,
    onPrevious,
    i,
}: FakeWizardStepProps) => {
    return (
        <WizardStep
            step={step}
            transition={TransitionInput.Default}
            form={service.getFormForStep(step)}
            service={service}
            onNext={onNext}
            onPrevious={onPrevious}
        >
            <div>Step {i}</div>
        </WizardStep>
    );
};
