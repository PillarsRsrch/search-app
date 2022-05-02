import { ReactElement } from 'react';
import { IWizardService } from '../../services/foundations/wizard/IWizardService';
import { IWizardStepProps } from '../../views/bases/wizard/IWizardStepProps';
import { WizardStepType } from '../../views/bases/wizard/WizardStepType';
import { IForm } from '../form/IForm';
import { ITransitionInput } from './ITransitionInput';

type NextHandler = (transition: ITransitionInput, form: IForm) => void;
type PreviousHandler = () => void;

export interface IWizardStep {
    setId(id: string): boolean;
    getId(): string;
    type(): WizardStepType;
    component(
        service: IWizardService,
        onNext: NextHandler,
        previous: PreviousHandler
    ): ReactElement<IWizardStepProps>;
}
