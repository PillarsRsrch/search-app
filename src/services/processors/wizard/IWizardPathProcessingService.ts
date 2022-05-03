import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardStep } from '../../../models/wizards/IWizardStep';

export interface IWizardPathProcessingService {
    getCurrentStep(): IWizardStep;
    getPreviousStep(): IWizardStep;
    getNextStep(input: ITransitionInput): IWizardStep;
    hasNextStep(): boolean;
    hasPreviousStep(): boolean;
    isInSubmitableState(): boolean;
}
