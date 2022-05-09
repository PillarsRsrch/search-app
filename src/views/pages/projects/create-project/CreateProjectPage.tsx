import React from 'react';
import { CenteredLayout } from '../../../components/layouts/CenteredLayout';
import { CreateProjectForm } from '../../../components/projects/create-project-form/CreateProjectForm';
import { ICreateProjectPageProps } from './ICreateProjectPageProps';

export const CreateProjectPage = ({}: ICreateProjectPageProps) => (
    <CenteredLayout>
        <CreateProjectForm onSubmit={(form) => console.log(form)} />
    </CenteredLayout>
);
