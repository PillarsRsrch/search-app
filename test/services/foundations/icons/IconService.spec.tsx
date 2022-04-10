import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { instance, mock, verify, when } from 'ts-mockito';
import { IRepository } from '../../../../src/repositories/IRepository';
import { IconService } from '../../../../src/services/foundations/icons/IconService';

describe('Icon Service Test Suite', () => {
    const mockedRepository: IRepository<ReactElement> =
        mock<IRepository<ReactElement>>();
    const service = new IconService(instance(mockedRepository));

    test('Should return the icon with the given name', () => {
        when(mockedRepository.getById('times')).thenReturn(<svg></svg>);

        const { container } = render(service.getIcon('times'));
        const svg = container.getElementsByTagName('svg')[0];

        expect(svg).toBeInTheDocument();
        verify(mockedRepository.getById('times')).once();
    });
});
