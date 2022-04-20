import { IProjectPageProps } from './IProjectPageProps';
import React from 'react';
import { ProjectDisplay } from '../../components/projects-display/ProjectDisplay';
import { PageTransition } from '../../../models/routers/PageTransition';

export const ProjectPage = ({
    projectService,
    routerService,
}: IProjectPageProps) => {
    function onCreateProject() {
        routerService.navigate(new PageTransition('/projects/new'));
    }

    return (
        <ProjectDisplay
            onCreateProject={onCreateProject}
            projectsService={projectService}
        />
    );
};
