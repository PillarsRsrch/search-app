import { IProjectListPageProps } from './IProjectListPageProps';
import React from 'react';
import { ProjectList } from '../../../components/projects/projects-list/ProjectList';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { CenteredLayout } from '../../../components/layouts/CenteredLayout';

export const ProjectListPage = ({
    projectService,
    routerService,
}: IProjectListPageProps) => {
    function onCreateProject() {
        routerService.navigate(new PageTransition('/projects/new'));
    }

    return (
        <CenteredLayout>
            <ProjectList
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        </CenteredLayout>
    );
};
