import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardForm } from '../../../models/wizards/IWizardForm';
import { IWizardStep } from '../../../models/wizards/IWizardStep';

export interface IWizardService {
    addStep(
        from: IWizardStep,
        to: IWizardStep,
        input: ITransitionInput
    ): boolean;
    getCurrentStep(): IWizardStep;
    getPreviousStep(): IWizardStep;
    getNextStep(input: ITransitionInput): IWizardStep;
    hasNextStep(): boolean;
    hasPreviousStep(): boolean;
    getForm(): IWizardForm;
    setFormForStep(step: IWizardStep, form: IForm): boolean;
    getFormForStep(step: IWizardStep): IForm;
}
