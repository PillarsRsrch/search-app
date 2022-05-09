import React from 'react';
import { CenteredLayout } from '../../../components/layouts/CenteredLayout';
import { CreateProjectForm } from '../../../components/projects/create-project-form/CreateProjectForm';
import { ICreateProjectPageProps } from './ICreateProjectPageProps';

export const CreateProjectPage = ({
    projectService,
    projectMapper,
}: ICreateProjectPageProps) => (
    <CenteredLayout>
        <CreateProjectForm
            projectMapper={projectMapper}
            onSubmit={(form) => projectService.createProjectAsync(form)}
        />
    </CenteredLayout>
);
