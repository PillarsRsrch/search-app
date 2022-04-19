import { IProjectPageProps } from './IProjectPageProps';
import React from 'react';
import { ProjectDisplay } from '../../components/projects-display/ProjectDisplay';

export const ProjectPage = ({ projectService }: IProjectPageProps) => {
    return <ProjectDisplay projectsService={projectService} />;
};
