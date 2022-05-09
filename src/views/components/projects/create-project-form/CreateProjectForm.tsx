import React, { useRef } from 'react';
import { Form as FormModel } from '../../../../models/form/Form';
import { Center } from '../../../bases/center/Center';
import { Form } from '../../../bases/form/Form';
import { Heading } from '../../../bases/header/Heading';
import { FormInput } from '../../form-inputs/FormInput';
import { FormSelect } from '../../form-inputs/FormSelect';
import { ICreateProjectFormProps } from './ICreateProjectFormProps';

export const CreateProjectForm = ({ onSubmit }: ICreateProjectFormProps) => {
    const formRef = useRef(new FormModel());
    const fundingInstitutes = ['National Science Foundation (NSF)'];
    const scientificFields = ['Engineering'];
    const dataSources = ['None', 'Google Drive'];

    return (
        <Form form={formRef.current} onSubmit={onSubmit}>
            <Center>
                <Heading level={3}>Create Project</Heading>
            </Center>
            <FormInput
                form={formRef.current}
                type="text"
                name="projectName"
                placeholder="Type project name..."
                label="Project Name"
            >
                Enter the name of your project here.
            </FormInput>
            <FormSelect
                form={formRef.current}
                options={fundingInstitutes}
                defaultValue={fundingInstitutes[0]}
                name="fundingInstitute"
                label="Funding Institute"
            >
                Select the funding institute that you are filing a grant
                application for.
            </FormSelect>
            <FormSelect
                form={formRef.current}
                options={scientificFields}
                defaultValue={scientificFields[0]}
                name="projectField"
                label="Project Field"
            >
                Select the funding institute that you are filing a grant
                application for.
            </FormSelect>
            <FormSelect
                form={formRef.current}
                options={dataSources}
                defaultValue={dataSources[0]}
                name="dataSource"
                label="Data Source"
            >
                Select "None" if you are creating an application from scratch.
                If you have already gathered some data, choose the service that
                currently hosts your data
            </FormSelect>
        </Form>
    );
};
