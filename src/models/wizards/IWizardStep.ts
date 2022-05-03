import { ReactElement } from 'react';
import { IState } from '../../data-structures/finite-state-machine/IState';
import { IWizardStepProps } from '../../views/bases/wizard/IWizardStepProps';
import { WizardStepType } from '../../views/bases/wizard/WizardStepType';
import { IForm } from '../form/IForm';
import { ITransitionInput } from './ITransitionInput';

type NextHandler = (transition: ITransitionInput, form: IForm) => void;
type PreviousHandler = () => void;

export interface IWizardStep {
    component(
        onNext: NextHandler,
        previous: PreviousHandler
    ): ReactElement<IWizardStepProps>;
    createState(): IState;
    id(): string;
    type(): WizardStepType;
}
