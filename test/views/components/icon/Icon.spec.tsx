import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { instance, mock, reset, when } from 'ts-mockito';
import { IIconService } from '../../../../src/services/foundations/icons/IIconService';
import { Icon } from '../../../../src/views/components/icon/Icon';
import { IconSize } from '../../../../src/views/components/icon/IconSize';

describe('Icon Test Suite', () => {
    const mockedService: IIconService = mock<IIconService>();
    const service = instance(mockedService);

    beforeEach(() => {
        reset(mockedService);
    });

    test('Should render an icon', () => {
        when(mockedService.getIcon('times')).thenReturn(<svg></svg>);
        const { container } = render(
            <Icon size={IconSize.Small} service={service} name="times" />
        );

        const icon = container.getElementsByClassName('icon-small')[0];

        expect(icon).toBeInTheDocument();
    });
});
