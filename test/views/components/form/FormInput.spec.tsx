import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { anyString, instance, mock, reset, verify } from 'ts-mockito';
import { IForm } from '../../../../src/models/form/IForm';
import { FormInput } from '../../../../src/views/components/form/FormInput';

describe('Form Input Test Suite', () => {
    const mockedFormService = mock<IForm>();
    const formService = instance(mockedFormService);

    beforeEach(() => {
        reset(mockedFormService);
    });

    test('Should set the form to be the empty string on first render', () => {
        render(
            <FormInput
                placeholder="placeholder"
                label="Field"
                type="text"
                name="field"
                form={formService}
            >
                Field description
            </FormInput>
        );

        verify(mockedFormService.addField('field', '')).once();
        verify(mockedFormService.setField('field', anyString())).never();
    });

    test('Should set the form to be the string "a" on change', () => {
        const { container } = render(
            <FormInput
                label="Field"
                placeholder="placeholder"
                type="text"
                name="field"
                form={formService}
            >
                Field description
            </FormInput>
        );

        const input = container.getElementsByClassName('input-component')[0];
        fireEvent.change(input, {
            target: {
                value: 'a',
            },
        });

        verify(mockedFormService.addField('field', '')).once();
        verify(mockedFormService.setField('field', 'a')).once();
    });
});
