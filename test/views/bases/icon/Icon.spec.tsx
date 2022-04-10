import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Icon } from '../../../../src/views/bases/icon/Icon';
import { IconSize } from '../../../../src/views/bases/icon/IconSize';

describe('Icon Test Suite', () => {
    test('Should render an icon', () => {
        const { container } = render(
            <Icon size={IconSize.Small} svg={<svg></svg>} />
        );

        const icon = container.getElementsByTagName('svg')[0];

        expect(icon).toBeInTheDocument();
    });

    test('Should render an icon with correct size', () => {
        const { container } = render(
            <Icon size={IconSize.Medium} svg={<svg></svg>} />
        );

        const icon = container.getElementsByClassName('icon-medium')[0];

        expect(icon).toBeInTheDocument();
    });
});
