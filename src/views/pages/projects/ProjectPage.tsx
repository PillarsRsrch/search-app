import { IProjectPageProps } from './IProjectPageProps';
import React from 'react';
import { ProjectDisplay } from '../../components/projects/projects-display/ProjectDisplay';
import { PageTransition } from '../../../models/routers/PageTransition';
import { CenteredLayout } from '../../components/layouts/CenteredLayout';

export const ProjectPage = ({
    projectService,
    routerService,
}: IProjectPageProps) => {
    function onCreateProject() {
        routerService.navigate(new PageTransition('/projects/new'));
    }

    return (
        <CenteredLayout>
            <ProjectDisplay
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        </CenteredLayout>
    );
};
