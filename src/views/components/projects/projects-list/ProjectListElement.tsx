import React from 'react';
import { Card } from '../../../bases/card/Card';
import { Heading } from '../../../bases/header/Heading';
import { Text } from '../../../bases/text/Text';
import { IProjectListElementProps } from './IProjectListElementProps';

export const ProjectListElement = ({
    project,
    viewProject,
}: IProjectListElementProps) => (
    <Card width="300px" height="200px" onClick={() => viewProject(project)}>
        <Heading level={5}>{project.name()}</Heading>
        <Text>{project.fundingInstitute()}</Text>
        <Text>{project.field()}</Text>
    </Card>
);
