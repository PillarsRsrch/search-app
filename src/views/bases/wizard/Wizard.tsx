import React, { useState } from 'react';
import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { Button } from '../button/Button';
import { Heading } from '../header/Heading';
import { IWizardProps } from './IWizardProps';
import { WizardStepType } from './WizardStepType';

export const Wizard = ({
    title,
    service,
    onCancel,
    onSubmit,
}: IWizardProps) => {
    const [step, setStep] = useState(service.getCurrentStep());

    function onNext(transition: ITransitionInput, form: IForm) {
        setStep(service.getNextStep(transition.toString()));
    }

    function onPrevious() {
        setStep(service.getPreviousStep());
    }

    return (
        <>
            <Heading level={2}>{title}</Heading>
            {step.component(onNext, onPrevious)}
            <Button disabled={false} onClick={onCancel}>
                Cancel
            </Button>
            <Button
                disabled={!service.isInSubmitableState()}
                onClick={onSubmit}
            >
                Submit
            </Button>
        </>
    );
};
