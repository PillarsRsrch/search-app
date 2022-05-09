import React, { useEffect, useState } from 'react';
import { Label } from '../../bases/label/Label';
import { Select } from '../../bases/select/Select';
import { Text } from '../../bases/text/Text';
import { IFormSelectProps } from './IFormSelectProps';

export const FormSelect = ({
    name,
    defaultValue,
    options,
    form,
    label,
    children,
}: IFormSelectProps) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        form.addField(name, defaultValue);
    }, []);

    useEffect(() => {
        form.setField(name, value);
    }, [value]);

    return (
        <Label value={label}>
            <Text>{children}</Text>
            <Select
                options={options}
                value={value}
                onSelect={(selectedValue) => setValue(selectedValue)}
            />
        </Label>
    );
};
