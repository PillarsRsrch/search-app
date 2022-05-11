import React from 'react';
import { Button } from '../../../bases/button/Button';
import { IProjectListFragmentProps } from './IProjectListFragmentProps';

export const ProjectListFragment = ({
    projects,
    createProject,
}: IProjectListFragmentProps) => {
    return (
        <>
            <Button onClick={createProject} disabled={false}>
                Create Project
            </Button>
            {projects.map((project, i) => (
                <div key={i} className="project-component">
                    {project.name()}
                </div>
            ))}
        </>
    );
};
