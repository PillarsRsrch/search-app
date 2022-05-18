import React, { useState } from 'react';
import { DataSourceTypes } from '../../../../models/data/DataSourceTypes';
import { IForm } from '../../../../models/form/IForm';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { Heading } from '../../../bases/header/Heading';
import { DataSourceForm } from '../../../components/data-sources/data-source-form/DataSourceForm';
import { DriveList } from '../../../components/google-drive/drive-list/DriveList';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';
import { ICreateDataSourcePageProps } from './ICreateDataSourcePageProps';

export const CreateDataSourcePage = ({
    routerService,
    dataSourceService,
    formMapper,
    projectId,
    googleDriveService,
}: ICreateDataSourcePageProps) => {
    const [sourceType, setSourceType] = useState(DataSourceTypes.Manual);
    const dataSourceSetupLookup = new Map([
        [DataSourceTypes.Manual, <></>],
        [
            DataSourceTypes.GoogleDrive,
            <>
                <Heading level={2}>Select A Drive</Heading>
                <DriveList googleDriveService={googleDriveService} />
            </>,
        ],
    ]);

    async function onSubmit(form: IForm) {
        await dataSourceService.createDataSource(formMapper.map(form));
        routerService.navigate(
            new PageTransition(`/projects/${projectId}/data`)
        );
    }

    return (
        <HorizontallyCenteredLayout>
            <Heading level={1}>Create Data Source</Heading>
            <DataSourceForm
                onTypeChange={(type) => setSourceType(type)}
                onSubmit={onSubmit}
                dataSourceSetupComponent={dataSourceSetupLookup.get(sourceType)}
            />
        </HorizontallyCenteredLayout>
    );
};
