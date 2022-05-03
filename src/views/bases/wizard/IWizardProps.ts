import { IWizardPathProcessingService } from '../../../services/processors/wizard/IWizardPathProcessingService';

export interface IWizardProps {
    service: IWizardPathProcessingService;
    title: string;
    onCancel: () => void;
    onSubmit: () => void;
}
