import React from 'react';
import { IForm } from '../../../../models/form/IForm';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { Heading } from '../../../bases/header/Heading';
import { DataSourceForm } from '../../../components/data-sources/data-source-form/DataSourceForm';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';
import { ICreateDataSourcePageProps } from './ICreateDataSourcePageProps';

export const CreateDataSourcePage = ({
    routerService,
    dataSourceService,
    formMapper,
    projectId,
}: ICreateDataSourcePageProps) => {
    async function onSubmit(form: IForm) {
        await dataSourceService.createDataSource(formMapper.map(form));
        routerService.navigate(
            new PageTransition(`/projects/${projectId}/data`)
        );
    }

    return (
        <HorizontallyCenteredLayout>
            <Heading level={1}>Create Data Source</Heading>
            <DataSourceForm onSubmit={onSubmit} />
        </HorizontallyCenteredLayout>
    );
};
