import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';

export interface IWizardStepFormProps {
    form: IForm;
    transition: ITransitionInput;
    setTransition: (transition: ITransitionInput) => void;
}
