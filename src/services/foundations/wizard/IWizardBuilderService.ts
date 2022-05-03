import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardStep } from '../../../models/wizards/IWizardStep';

export interface IWizardBuilderService {
    addStep(
        from: IWizardStep,
        to: IWizardStep,
        input: ITransitionInput
    ): boolean;
    getCurrentStep(): IWizardStep;
    isInSubmittingStep(): boolean;
    setStartingStep(step: IWizardStep): void;
    setStep(step: IWizardStep): void;
    step(input: ITransitionInput): void;
}
