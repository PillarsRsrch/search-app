import { IFiniteStateMachine } from '../../../data-structures/finite-state-machine/IFiniteStateMachine';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardStep } from '../../../models/wizards/IWizardStep';
import { WizardStepType } from '../../../views/bases/wizard/WizardStepType';
import { IWizardBuilderService } from './IWizardBuilderService';

export class WizardBuilderService implements IWizardBuilderService {
    private readonly stepLookup: Map<string, IWizardStep>;

    constructor(private readonly finiteStateMachine: IFiniteStateMachine) {
        this.stepLookup = new Map<string, IWizardStep>();
    }

    addStep(
        from: IWizardStep,
        to: IWizardStep,
        input: ITransitionInput
    ): boolean {
        this.stepLookup.set(from.id(), from);
        this.stepLookup.set(to.id(), to);
        this.finiteStateMachine.addTransition(
            from.createState(),
            to.createState(),
            input.toString()
        );
        return true;
    }

    getCurrentStep(): IWizardStep {
        const currentState = this.finiteStateMachine.currentState();
        return this.stepLookup.get(currentState.id()) as IWizardStep;
    }

    isInSubmittingStep(): boolean {
        return this.getCurrentStep().type() === WizardStepType.Submit;
    }

    setStartingStep(step: IWizardStep): void {
        this.stepLookup.set(step.id(), step);
        return this.finiteStateMachine.setStartingState(step.createState());
    }

    setStep(step: IWizardStep): void {
        this.finiteStateMachine.setState(step.createState());
    }

    step(input: ITransitionInput): void {
        this.finiteStateMachine.step(input.toString());
    }
}
