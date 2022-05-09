import React, { useEffect, useState } from 'react';
import { Input } from '../../bases/input/Input';
import { Label } from '../../bases/label/Label';
import { Text } from '../../bases/text/Text';
import { IFormInputProps } from './IFormInputProps';

export const FormInput = ({
    description,
    type,
    name,
    label,
    form,
    placeholder,
}: IFormInputProps) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        form.addField(name, '');
    }, []);

    function onChange(value: string) {
        setValue(value);
        form.setField(name, value);
    }

    return (
        <>
            <Label value={label}>
                <Text>{description}</Text>
                <Input
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    name={name}
                    onChange={onChange}
                />
            </Label>
        </>
    );
};
