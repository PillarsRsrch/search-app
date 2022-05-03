import { ReactElement } from 'react';
import { IForm } from '../../../models/form/IForm';
import { ITransitionInput } from '../../../models/wizards/ITransitionInput';
import { IWizardPathProcessingService } from '../../../services/processors/wizard/IWizardPathProcessingService';
import { IWizardStepFormProps } from './IWizardStepFormProps';

export interface IWizardStepProps {
    pathService: IWizardPathProcessingService;
    transition: ITransitionInput;
    form: IForm;
    children: ReactElement<IWizardStepFormProps>;
    onNext(input: ITransitionInput, form: IForm): void;
    onPrevious(): void;
}
