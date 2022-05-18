import React from 'react';
import '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { CreateDataSourcePage } from '../../../../../src/views/pages/data-sources/create-data-source/CreateDataSourcePage';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IRouterService } from '../../../../../src/services/foundations/router/IRouterService';
import { IDataSourceService } from '../../../../../src/services/foundations/data-sources/IDataSourceService';
import { IMapper } from '../../../../../src/mappers/IMapper';
import { IForm } from '../../../../../src/models/form/IForm';
import { IDataSource } from '../../../../../src/models/data/IDataSource';
import { resolvableInstance } from '../../../../extensions/resolvableInstance';
import { IGoogleDriveService } from '../../../../../src/services/foundations/google-drive/IGoogleDriveService';
import { IGoogleDrive } from '../../../../../src/models/google-drive/IGoogleDrive';

describe('Create Data Source Page', () => {
    const projectId = 'project-id';
    const mockedRouterService = mock<IRouterService>();
    const mockedDataSourceService = mock<IDataSourceService>();
    const mockedMapper = mock<IMapper<IForm, IDataSource>>();
    const mockedDataSource = mock<IDataSource>();
    const mockedGoogleDriveService = mock<IGoogleDriveService>();
    const mockedGoogleDrive = mock<IGoogleDrive>();
    const routerService = instance(mockedRouterService);
    const dataSourceService = instance(mockedDataSourceService);
    const mapper = instance(mockedMapper);
    const dataSource = resolvableInstance(mockedDataSource);
    const googleDriveService = instance(mockedGoogleDriveService);
    const googleDrive = resolvableInstance(mockedGoogleDrive);

    beforeEach(() => {
        reset(mockedRouterService);
        reset(mockedDataSourceService);
        reset(mockedMapper);
        reset(mockedDataSource);
        reset(mockedGoogleDriveService);
        reset(mockedGoogleDrive);
    });

    test('Should render the create data source page and form', () => {
        when(mockedGoogleDriveService.getAllDrivesAsync()).thenResolve([]);

        render(
            <CreateDataSourcePage
                googleDriveService={googleDriveService}
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
        when(mockedGoogleDriveService.getAllDrivesAsync()).thenResolve([]);
        when(mockedDataSourceService.createDataSource(anything())).thenResolve(
            dataSource
        );
        when(mockedMapper.map(anything())).thenReturn(dataSource);

        const { container } = render(
            <CreateDataSourcePage
                googleDriveService={googleDriveService}
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

    test('Should render the google drive setup when Google Drive type is selected', async () => {
        when(mockedGoogleDrive.name()).thenReturn('Drive A');
        when(mockedGoogleDrive.id()).thenReturn('driveId');
        when(mockedGoogleDriveService.getAllDrivesAsync()).thenResolve([
            googleDrive,
        ]);
        when(mockedDataSourceService.createDataSource(anything())).thenResolve(
            dataSource
        );
        when(mockedMapper.map(anything())).thenReturn(dataSource);

        render(
            <CreateDataSourcePage
                googleDriveService={googleDriveService}
                routerService={routerService}
                dataSourceService={dataSourceService}
                formMapper={mapper}
                projectId={projectId}
            />
        );

        const manual = screen.getByText('Manual');
        fireEvent.focus(manual);
        const googleDriveText = screen.getByText('Google Drive');
        fireEvent.click(googleDriveText);

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        expect(screen.getByText('Drive A')).toBeInTheDocument();
        verify(mockedGoogleDriveService.getAllDrivesAsync()).once();
    });
});
