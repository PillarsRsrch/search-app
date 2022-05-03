import { IWizardPathService } from '../../../services/processors/wizard/IWizardPathService';

export interface IWizardProps {
    service: IWizardPathService;
    title: string;
    onCancel: () => void;
    onSubmit: () => void;
}
