import React from 'react';
import { Button } from '../button/Button';
import { IWizardStepProps } from './IWizardStepProps';

export const WizardStep = ({
    pathService: service,
    onNext,
    onPrevious,
    children,
    transition,
    form,
}: IWizardStepProps) => {
    return (
        <>
            {children}
            <Button
                disabled={!service.hasNextStep()}
                onClick={() => onNext(transition, form)}
            >
                Next
            </Button>
            <Button
                disabled={!service.hasPreviousStep()}
                onClick={() => onPrevious()}
            >
                Previous
            </Button>
        </>
    );
};
