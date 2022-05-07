import { Form } from '../../../models/form/Form';
import { IForm } from '../../../models/form/IForm';
import { IFormService } from './IFormService';

export class FormService implements IFormService {
    constructor(private readonly formData: Map<string, unknown> = new Map()) {}

    getField<T>(field: string): T {
        if (!this.hasField(field)) {
            throw new Error(
                `The field "${field}" does not exist in the current form.`
            );
        }
        return this.formData.get(field) as T;
    }

    hasField(field: string): boolean {
        return this.formData.has(field);
    }

    addField<T>(field: string, data: T): void {
        if (this.hasField(field)) {
            throw new Error(`Can not add existing field "${field}".`);
        }
        this.formData.set(field, data);
    }

    setField<T>(field: string, data: T): void {
        if (!this.hasField(field)) {
            throw new Error(`Can not set a non existant field "${field}".`);
        }
        this.formData.set(field, data);
    }

    removeField(field: string): boolean {
        if (!this.hasField(field)) {
            throw new Error(`Can not remove a non existant field "${field}".`);
        }
        this.formData.delete(field);
        return true;
    }

    createForm(): IForm {
        return new Form(this.formData);
    }
}
