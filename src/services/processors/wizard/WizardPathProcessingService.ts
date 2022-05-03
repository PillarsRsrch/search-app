import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardStep } from '../../../models/wizards/IWizardStep';
import { WizardStepType } from '../../../views/bases/wizard/WizardStepType';
import { IWizardBuilderService } from '../../foundations/wizard/IWizardBuilderService';
import { IWizardPathProcessingService } from './IWizardPathProcessingService';

export class WizardPathProcessingService
    implements IWizardPathProcessingService
{
    private previousStack: IWizardStep[];
    private nextStack: IWizardStep[];

    constructor(private readonly service: IWizardBuilderService) {
        this.previousStack = [];
        this.nextStack = [];
    }

    getCurrentStep(): IWizardStep {
        return this.service.getCurrentStep();
    }

    getNextStep(input: ITransitionInput): IWizardStep {
        const currentStep = this.getCurrentStep();
        this.service.step(input);
        let nextStep = this.nextStack.pop() as IWizardStep;
        if (nextStep && !nextStep.equals(this.getCurrentStep())) {
            this.nextStack = [];
        } else {
            nextStep = this.getCurrentStep();
        }
        this.previousStack.push(currentStep);
        return nextStep;
    }

    getPreviousStep(): IWizardStep {
        if (!this.hasPreviousStep()) {
            throw new Error('No previous step');
        }
        const previousStep = this.previousStack.pop() as IWizardStep;
        this.service.setStep(previousStep);
        this.nextStack.push(previousStep);
        return this.getCurrentStep();
    }

    hasNextStep(): boolean {
        return this.getCurrentStep().type() !== WizardStepType.Submit;
    }

    hasPreviousStep(): boolean {
        return this.previousStack.length > 0;
    }

    isInSubmitableState(): boolean {
        return this.getCurrentStep().type() === WizardStepType.Submit;
    }
}
