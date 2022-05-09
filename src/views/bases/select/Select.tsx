import React, { useState } from 'react';
import { Option } from '../option/Option';
import { ISelectProps } from './ISelectProps';

export function Select({ value, options, onSelect }: ISelectProps) {
    const [isVisible, setVisible] = useState(false);

    function renderDropdown() {
        if (!isVisible) {
            return null;
        }
        return options.map((option) => (
            <Option
                key={option}
                value={option}
                onSelect={() => onSelect(option)}
            />
        ));
    }

    return (
        <div
            className="select-component"
            onClick={() => setVisible(!isVisible)}
        >
            <div className="select-component-value-container">{value}</div>
            <div className="select-component-options-container">
                {renderDropdown()}
            </div>
        </div>
    );
}
