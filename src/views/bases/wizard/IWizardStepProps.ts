import { ReactElement } from 'react';
import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardStep } from '../../../models/wizards/IWizardStep';
import { IWizardService } from '../../../services/foundations/wizard/IWizardService';
import { IWizardStepFormProps } from './IWizardStepFormProps';

export interface IWizardStepProps {
    step: IWizardStep;
    service: IWizardService;
    transition: ITransitionInput;
    form: IForm;
    onNext(input: ITransitionInput, form: IForm): void;
    onPrevious(): void;
    children: ReactElement<IWizardStepFormProps>;
}
