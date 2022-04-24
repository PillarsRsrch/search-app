import React from 'react';
import { Button } from '../../../bases/button/Button';
import { IProjectDisplayAllProjectsFragment } from './IProjectDisplayAllProjectsFragment';

export const ProjectDisplayAllProjectsFragment = ({
    projects,
    createProject,
}: IProjectDisplayAllProjectsFragment) => {
    return (
        <>
            <Button onClick={createProject} disabled={false}>
                Create Project
            </Button>
            {projects.map((project) => (
                <div className="project-component">{project}</div>
            ))}
        </>
    );
};
