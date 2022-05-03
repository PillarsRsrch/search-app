import { IForm } from '../../../models/form/IForm';
import { IWizardForm } from '../../../models/wizards/IWizardForm';
import { IWizardStep } from '../../../models/wizards/IWizardStep';

export interface IWizardFormService {
    getForm(): IWizardForm;
    setFormForStep(step: IWizardStep, form: IForm): boolean;
    getFormForStep(step: IWizardStep): IForm;
}
