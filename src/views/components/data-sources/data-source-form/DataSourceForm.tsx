import React from 'react';
import { useRef } from 'react';
import { DataSourceTypes } from '../../../../models/data/DataSourceTypes';
import { Form } from '../../../../models/form/Form';
import { Form as FormComponent } from '../../../bases/form/Form';
import { FormInput } from '../../../components/form-inputs/FormInput';
import { FormSelect } from '../../../components/form-inputs/FormSelect';
import { IDataSourceFormProps } from './IDataSourceFormProps';

export const DataSourceForm = ({ onSubmit }: IDataSourceFormProps) => {
    const formRef = useRef(new Form());

    return (
        <FormComponent form={formRef.current} onSubmit={onSubmit}>
            <FormInput
                type="text"
                label="Name"
                placeholder="Type name here..."
                name="name"
                form={formRef.current}
            >
                Enter the name of the data source.
            </FormInput>
            <FormSelect
                name="type"
                label="Source"
                form={formRef.current}
                defaultValue={DataSourceTypes.Manual}
                options={[DataSourceTypes.Manual, DataSourceTypes.GoogleDrive]}
            >
                Select the source of the data.
            </FormSelect>
        </FormComponent>
    );
};
