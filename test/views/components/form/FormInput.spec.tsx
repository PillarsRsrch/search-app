import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { anyString, instance, mock, reset, verify } from 'ts-mockito';
import { IFormService } from '../../../../src/services/foundations/form/IFormService';
import { FormInput } from '../../../../src/views/components/form/FormInput';

describe('Form Input Test Suite', () => {
    const mockedFormService = mock<IFormService>();
    const formService = instance(mockedFormService);

    beforeEach(() => {
        reset(mockedFormService);
    });

    test('Should set the form to be the empty string on first render', () => {
        render(
            <FormInput
                placeholder="placeholder"
                label="Field"
                description="Field description"
                type="text"
                name="field"
                formService={formService}
            />
        );

        verify(mockedFormService.addField('field', '')).once();
        verify(mockedFormService.setField('field', anyString())).never();
    });

    test('Should set the form to be the string "a" on change', () => {
        const { container } = render(
            <FormInput
                label="Field"
                placeholder="placeholder"
                description="Field description"
                type="text"
                name="field"
                formService={formService}
            />
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
