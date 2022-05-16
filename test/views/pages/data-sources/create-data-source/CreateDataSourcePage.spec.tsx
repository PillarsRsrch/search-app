import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { CreateDataSourcePage } from '../../../../../src/views/pages/data-sources/create-data-source/CreateDataSourcePage';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';
import { IDataSourceService } from '../../../../../src/services/foundations/data-sources/IDataSourceService';
import { IMapper } from '../../../../../src/mappers/IMapper';
import { IForm } from '../../../../../src/models/form/IForm';
import { IDataSource } from '../../../../../src/models/data/IDataSource';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';

describe('Create Data Source Page', () => {
    const projectId = 'project-id';
    const mockedRouterService = mock<IRouterService>();
    const mockedDataSourceService = mock<IDataSourceService>();
    const mockedMapper = mock<IMapper<IForm, IDataSource>>();
    const mockedDataSource = mock<IDataSource>();
    const routerService = instance(mockedRouterService);
    const dataSourceService = instance(mockedDataSourceService);
    const mapper = instance(mockedMapper);
    const dataSource = resolvableInstance(mockedDataSource);

    beforeEach(() => {
        reset(mockedRouterService);
        reset(mockedDataSourceService);
        reset(mockedMapper);
        reset(mockedDataSource);
    });

    test('Should render the create data source page and form', () => {
        render(
            <CreateDataSourcePage
                routerService={routerService}
                dataSourceService={dataSourceService}
                formMapper={mapper}
                projectId={projectId}
            />
        );

        const nameInput = screen.getByText('Name');
        const typeSelect = screen.getByText('Source');

        expect(nameInput).toBeInTheDocument();
        expect(typeSelect).toBeInTheDocument();
    });

    test('Should create a data source and redirect when submitting a valid form', async () => {
        when(mockedDataSourceService.createDataSource(anything())).thenResolve(
            dataSource
        );
        when(mockedMapper.map(anything())).thenReturn(dataSource);

        const { container } = render(
            <CreateDataSourcePage
                routerService={routerService}
                dataSourceService={dataSourceService}
                formMapper={mapper}
                projectId={projectId}
            />
        );

        const nameInput = container.querySelector(
            'input[name="name"]'
        ) as Element;
        fireEvent.change(nameInput, {
            target: {
                value: 'Name',
            },
        });
        const submit = screen.getByText('Submit');
        fireEvent.click(submit);

        verify(mockedMapper.map(anything())).once();
        await verify(
            mockedDataSourceService.createDataSource(anything())
        ).once();
        verify(mockedRouterService.navigate(anything())).once();
    });
});
