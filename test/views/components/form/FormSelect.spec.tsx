import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { instance, mock, reset, verify } from 'ts-mockito';
import { IForm } from '../../../../src/models/form/IForm';
import { FormSelect } from '../../../../src/views/components/form/FormSelect';

describe('Form Select Test Suite', () => {
    const mockedForm = mock<IForm>();
    const form = instance(mockedForm);

    beforeEach(() => {
        reset(mockedForm);
    });

    test('Should render a form select', () => {
        render(
            <FormSelect
                name="name"
                defaultValue="value"
                options={['a']}
                label="label"
                form={form}
            >
                description
            </FormSelect>
        );

        const label = screen.getByText('label');
        const defaultValue = screen.getByText('value');
        const description = screen.getByText('description');
        expect(screen.queryByText('a')).toBeNull();
        expect(label).toBeInTheDocument();
        expect(defaultValue).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        verify(mockedForm.addField('name', 'value')).once();
    });

    test('Should set the value of the form after selecting an option', () => {
        render(
            <FormSelect
                name="name"
                defaultValue="value"
                options={['a']}
                label="label"
                form={form}
            >
                description
            </FormSelect>
        );
        expect(screen.queryByText('a')).toBeNull();

        const defaultValue = screen.getByText('value');
        fireEvent.click(defaultValue);
        const a = screen.getByText('a');
        fireEvent.click(a);

        verify(mockedForm.addField('name', 'value')).once();
        verify(mockedForm.setField('name', 'a')).once();
    });
});
