import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Layout } from '../../../../src/views/bases/layout/Layout';

describe('Layout Test Suite', () => {
    test('Should render a layout component', () => {
        render(
            <Layout>
                <p>Text</p>
            </Layout>
        );

        const text = screen.getByText('Text');

        expect(text).toBeInTheDocument();
    });
});
