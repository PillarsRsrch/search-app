import { Form } from '../../../src/models/form/Form';

describe('Form Test Suite', () => {
    describe('addField', () => {
        test('Should throw an error when the field already exists', () => {
            const field = 'field';
            const value = 'value';
            const service = new Form(new Map([[field, value]]));

            expect(() => service.addField(field, value)).toThrowError(
                new Error(`Can not add existing field "${field}".`)
            );
        });

        test('Should add a field to the form', () => {
            const service = new Form();
            const field = 'field';
            const expectedValue = 'value';
            const inputValue = expectedValue;

            service.addField(field, inputValue);

            expect(service.getField(field)).toEqual(expectedValue);
        });
    });

    describe('getField', () => {
        test('Should get a field', () => {
            const field = 'field';
            const expectedValue = 'value';
            const inputValue = expectedValue;
            const service = new Form(new Map([[field, inputValue]]));

            const actualValue = service.getField(field);

            expect(actualValue).toEqual(expectedValue);
        });

        test('Should throw an error when there is no key', () => {
            const field = 'field';
            const service = new Form();

            expect(() => service.getField(field)).toThrowError(
                new Error(
                    `The field "${field}" does not exist in the current form.`
                )
            );
        });
    });

    describe('hasField', () => {
        test('Should return true when the form has a given field', () => {
            const field = 'field';
            const expectedValue = 'value';
            const inputValue = expectedValue;
            const service = new Form(new Map([[field, inputValue]]));

            const result = service.hasField(field);

            expect(result).toBeTruthy();
        });

        test('Should return false when the form has a given field', () => {
            const field = 'field';
            const service = new Form();

            const result = service.hasField(field);

            expect(result).toBeFalsy();
        });
    });

    describe('setField', () => {
        test('Should set a field when it exists on the form', () => {
            const field = 'field';
            const expectedValue = 'value';
            const inputValue = expectedValue;
            const service = new Form(new Map([[field, '']]));

            service.setField(field, inputValue);

            expect(service.getField(field)).toEqual(expectedValue);
        });

        test('Should throw an error when setting a field that does not exists', () => {
            const field = 'field';
            const inputValue = 'value';
            const service = new Form();

            expect(() => service.setField(field, inputValue)).toThrowError(
                new Error(`Can not set a non existant field "${field}".`)
            );
        });
    });

    describe('removeField', () => {
        test('Should throw an error when removing a nonexistent field', () => {
            const field = 'field';
            const service = new Form();

            expect(() => service.removeField(field)).toThrowError(
                new Error(`Can not remove a non existant field "${field}".`)
            );
        });

        test('Should remove the field from the form', () => {
            const field = 'field';
            const formService = new Form(new Map([[field, '']]));

            const result = formService.removeField(field);

            expect(result).toBeTruthy();
        });
    });
});
