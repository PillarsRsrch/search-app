import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { instance, mock } from 'ts-mockito';
import { IForm } from '../../../../src/models/form/IForm';
import { Form } from '../../../../src/views/bases/form/Form';

describe('Form Test Suite', () => {
    const mockedForm = mock<IForm>();
    const form = instance(mockedForm);

    test('Should call on submit', () => {
        const onSubmit = jest.fn();
        render(
            <Form form={form} onSubmit={onSubmit}>
                <p>Hello</p>
            </Form>
        );

        const submit = screen.getByText('Submit');
        const hello = screen.getByText('Hello');
        fireEvent.click(submit);

        expect(submit).toBeInTheDocument();
        expect(hello).toBeInTheDocument();
        expect(onSubmit).toHaveBeenCalled();
    });
});
