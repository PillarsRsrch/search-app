import { IForm } from '../form/IForm';
import { IWizardStep } from './IWizardStep';

export interface IWizardForm {
    getFormsForStage(step: IWizardStep): IForm[];
}
