import { IProjectListPageProps } from './IProjectListPageProps';
import React from 'react';
import { ProjectList } from '../../../components/projects/projects-list/ProjectList';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { CenteredLayout } from '../../../components/layouts/CenteredLayout';
import { IProject } from '../../../../models/projects/IProject';

export const ProjectListPage = ({
    projectService,
    routerService,
}: IProjectListPageProps) => {
    function onCreateProject() {
        routerService.navigate(new PageTransition('/projects/new'));
    }

    function onViewProject(project: IProject) {
        routerService.navigate(new PageTransition(`/projects/${project.id()}`));
    }

    return (
        <CenteredLayout>
            <ProjectList
                onViewProject={onViewProject}
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        </CenteredLayout>
    );
};
