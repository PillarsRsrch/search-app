import { IProjectListPageProps } from './IProjectListPageProps';
import React from 'react';
import { ProjectList } from '../../../components/projects/projects-list/ProjectList';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { IProject } from '../../../../models/projects/IProject';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';

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
        <HorizontallyCenteredLayout>
            <ProjectList
                onViewProject={onViewProject}
                onCreateProject={onCreateProject}
                projectsService={projectService}
            />
        </HorizontallyCenteredLayout>
    );
};
