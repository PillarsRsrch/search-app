import { IForm } from './IForm';

export class Form implements IForm {
    constructor(private readonly formData: Map<string, unknown>) {}

    getData<T>(key: string): T {
        return this.formData.get(key) as T;
    }

    serialize(): Record<string, any> {
        const response: Record<string, any> = {};
        for (const key in this.formData.keys()) {
            response[key] = this.formData.get(key);
        }
        return response;
    }
}
