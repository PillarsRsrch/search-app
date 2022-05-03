import React from 'react';
import { WizardStep } from '../../../../src/views/bases/wizard/WizardStep';
import { TransitionInput } from '../../../../src/models/wizards/TransitionInput';
import { ITransitionInput } from '../../../../src/models/wizards/ITransitionInput';
import { IForm } from '../../../../src/models/form/IForm';
import { IWizardStep } from '../../../../src/models/wizards/IWizardStep';
import { IWizardPathService } from '../../../../src/services/processors/wizard/IWizardPathService';
import { IWizardFormService } from '../../../../src/services/processors/wizard/IWizardFormService';

interface FakeWizardStepProps {
    i: number;
    step: IWizardStep;
    pathService: IWizardPathService;
    formService: IWizardFormService;
    onNext: (transition: ITransitionInput, form: IForm) => void;
    onPrevious: () => void;
}

export const FakeWizardStep = ({
    step,
    pathService,
    formService,
    onNext,
    onPrevious,
    i,
}: FakeWizardStepProps) => {
    return (
        <WizardStep
            transition={TransitionInput.Default}
            form={formService.getFormForStep(step)}
            pathService={pathService}
            onNext={onNext}
            onPrevious={onPrevious}
        >
            <div>Step {i}</div>
        </WizardStep>
    );
};
