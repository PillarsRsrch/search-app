import { ReactElement } from 'react';
import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardPathService } from '../../../services/processors/wizard/IWizardPathService';
import { IWizardStepFormProps } from './IWizardStepFormProps';

export interface IWizardStepProps {
    pathService: IWizardPathService;
    transition: ITransitionInput;
    form: IForm;
    children: ReactElement<IWizardStepFormProps>;
    onNext(input: ITransitionInput, form: IForm): void;
    onPrevious(): void;
}
