import React from 'react';
import { IProject } from '../../../../models/projects/IProject';
import { PageTransition } from '../../../../models/routers/PageTransition';
import { HorizontallyCenteredLayout } from '../../../components/layouts/centered/HorizontallyCenteredLayout';
import { ProjectView } from '../../../components/projects/project-view/ProjectView';
import { IViewProjectPageProps } from './IViewProjectPageProps';

export const ViewProjectPage = ({
    projectId,
    projectService,
    routerService,
}: IViewProjectPageProps) => {
    function onViewData(project: IProject) {
        routerService.navigate(
            new PageTransition(`/projects/${project.id()}/data`)
        );
    }

    return (
        <HorizontallyCenteredLayout>
            <ProjectView
                onViewData={onViewData}
                projectService={projectService}
                projectId={projectId}
            />
        </HorizontallyCenteredLayout>
    );
};
