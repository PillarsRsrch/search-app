import React from 'react';
import { Button } from '../../../bases/button/Button';
import { IProjectListFragmentProps } from './IProjectListFragmentProps';
import { ProjectListElement } from './ProjectListElement';

export const ProjectListFragment = ({
    projects,
    createProject,
    viewProject,
}: IProjectListFragmentProps) => {
    return (
        <>
            <Button onClick={createProject} disabled={false}>
                Create Project
            </Button>
            {projects.map((project) => (
                <ProjectListElement
                    viewProject={viewProject}
                    key={project.id()}
                    project={project}
                />
            ))}
        </>
    );
};
