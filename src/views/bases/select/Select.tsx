import React, { useEffect, useRef, useState } from 'react';
import { Option } from '../option/Option';
import { ISelectProps } from './ISelectProps';
import {
    StyledSelect,
    StyledSelectDropdownContainer,
    StyledSelectValue,
} from './StyledSelect';

export function Select({ value, options, onSelect }: ISelectProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState(false);

    function handleSelect(option: string) {
        onSelect(option);
        setVisible(false);
        if (containerRef.current) {
            containerRef.current.blur();
        }
    }

    function renderDropdown() {
        if (!isVisible) {
            return null;
        }
        return (
            <StyledSelectDropdownContainer className="select-component-options-container">
                {options.map((option) => (
                    <Option
                        key={option}
                        value={option}
                        onSelect={handleSelect}
                    />
                ))}
            </StyledSelectDropdownContainer>
        );
    }

    return (
        <StyledSelect
            ref={containerRef}
            className="select-component"
            tabIndex={0}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
        >
            <StyledSelectValue className="select-component-value-container">
                {value}
            </StyledSelectValue>
            {renderDropdown()}
        </StyledSelect>
    );
}
