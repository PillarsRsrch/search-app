import { IWizardService } from '../../../services/foundations/wizard/IWizardService';

export interface IWizardProps {
    service: IWizardService;
    title: string;
    onCancel: () => void;
    onSubmit: () => void;
}
