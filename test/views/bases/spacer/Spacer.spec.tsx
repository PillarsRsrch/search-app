import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Spacer } from '../../../../src/views/bases/spacer/Spacer';

describe('Spacer Test Suite', () => {
    test('Should render a spacer for use in flex layouts', () => {
        const { container } = render(<Spacer></Spacer>);

        const element = container.getElementsByTagName('div')[0];

        expect(element).toBeInTheDocument();
    });
});
