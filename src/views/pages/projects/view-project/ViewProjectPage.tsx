import React, { useEffect, useState } from 'react';
import { DataSourceTypes } from '../../../../models/projects/DataSourceTypes';
import { IProject } from '../../../../models/projects/IProject';
import { Heading } from '../../../bases/header/Heading';
import { Text } from '../../../bases/text/Text';
import { IViewProjectPageProps } from './IViewProjectPageProps';

export const ViewProjectPage = ({
    projectId,
    projectService,
}: IViewProjectPageProps) => {
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
        async function getProject() {
            const project = await projectService.getProjectByIdAsync(projectId);
            setProject(project);
        }

        if (projectId) {
            getProject();
        }
    }, [projectId]);

    function shouldRenderDataSetupWizard() {
        return project?.dataSource() !== DataSourceTypes.None;
    }

    function renderDataSetupWizard() {
        return <Text>Data Setup Wizard</Text>;
    }

    if (!project) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <Heading level={4}>{project.name()}</Heading>
            {shouldRenderDataSetupWizard() ? renderDataSetupWizard() : null}
        </>
    );
};
