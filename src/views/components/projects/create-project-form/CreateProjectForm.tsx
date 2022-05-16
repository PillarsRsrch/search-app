import React, { useRef } from 'react';
import { Form as FormModel } from '../../../../models/form/Form';
import { IForm } from '../../../../models/form/IForm';
import { DataSourceTypes } from '../../../../models/data/DataSourceTypes';
import { FundingInstituteTypes } from '../../../../models/projects/FundingInstituteTypes';
import { ScientificFieldTypes } from '../../../../models/projects/ScientificFieldTypes';
import { Center } from '../../../bases/center/Center';
import { Form } from '../../../bases/form/Form';
import { Heading } from '../../../bases/header/Heading';
import { FormInput } from '../../form-inputs/FormInput';
import { FormSelect } from '../../form-inputs/FormSelect';
import { ICreateProjectFormProps } from './ICreateProjectFormProps';

export const CreateProjectForm = ({
    onSubmit,
    projectMapper,
}: ICreateProjectFormProps) => {
    const formRef = useRef(new FormModel());
    const fundingInstitutes = [FundingInstituteTypes.NationalScienceFoundation];
    const scientificFields = [ScientificFieldTypes.Engineering];
    const dataSources = [DataSourceTypes.Manual, DataSourceTypes.GoogleDrive];

    function handleSubmit(form: IForm) {
        onSubmit(projectMapper.map(form));
    }

    return (
        <Form form={formRef.current} onSubmit={handleSubmit}>
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
        </Form>
    );
};
