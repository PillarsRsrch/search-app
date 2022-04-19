import { IProjectDisplayProps } from './IProjectDisplayProps';
import React, { useEffect, useState } from 'react';
import { FlexLayout } from '../../bases/layout/FlexLayout';
import { Center } from '../../bases/center/Center';
import { Text } from '../../bases/text/Text';
import { Button } from '../../bases/button/Button';

export const ProjectDisplay = ({ projectsService }: IProjectDisplayProps) => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            const projects = await projectsService.getAllServicesAsync();
            setProjects(projects);
            setLoading(false);
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <FlexLayout
                className="project-display-component"
                styles={{
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Text>Loading...</Text>
            </FlexLayout>
        );
    }

    if (projects.length == 0) {
        return (
            <FlexLayout
                className="project-display-component"
                styles={{
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Text>
                    You have no projects. Create a new project to get started
                </Text>
                <Button onClick={() => {}} disabled={false}>
                    Create Project
                </Button>
            </FlexLayout>
        );
    } else {
        return (
            <FlexLayout className="project-display-component" styles={{}}>
                <Button onClick={() => {}} disabled={false}>
                    Create Project
                </Button>
                {projects.map((project) => (
                    <div className="project-component">{project}</div>
                ))}
            </FlexLayout>
        );
    }
};
