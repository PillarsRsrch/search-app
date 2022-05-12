import React from 'react';
import { IProject } from '../../../../models/projects/IProject';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { CenteredLayout } from '../../../components/layouts/centered/CenteredLayout';
import { CreateProjectForm } from '../../../components/projects/create-project-form/CreateProjectForm';
import { ICreateProjectPageProps } from './ICreateProjectPageProps';

export const CreateProjectPage = ({
    projectService,
    projectMapper,
    routerService,
}: ICreateProjectPageProps) => {
    async function handleSubmit(project: IProject) {
        await projectService.createProjectAsync(project);
        routerService.navigate(new PageTransition('/projects'));
    }

    return (
        <CenteredLayout>
            <CreateProjectForm
                projectMapper={projectMapper}
                onSubmit={handleSubmit}
            />
        </CenteredLayout>
    );
};
