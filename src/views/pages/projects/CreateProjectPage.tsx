import React from 'react';
import { CreateProjectForm } from '../../components/projects/create-project-form/CreateProjectForm';
import { ICreateProjectPageProps } from './ICreateProjectPageProps';

export const CreateProjectPage = ({}: ICreateProjectPageProps) => (
    <CreateProjectForm onSubmit={(form) => console.log(form)} />
);
