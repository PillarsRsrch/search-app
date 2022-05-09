import styled from '@emotion/styled';

export const StyledSelect = styled.div`
    padding: 10px 25px;
    position: relative;
    width: 100%;
`;

export const StyledSelectValue = styled.div`
    transition-property: border-color;
    transition-duration: 200ms;
    border: 1px solid #e2e8f0;
    color: #718096;
    font-size: 1rem;
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding-inline-start: 1rem;
    border-radius: 0.375rem;
    width: 100%;
    padding-inline-end: 1rem;
    &:hover {
        border: 1px solid #a0aec0;
    }
`;

export const StyledSelectDropdownContainer = styled.div`
    transition-property: border-color;
    transition-duration: 200ms;
    border: 1px solid #e2e8f0;
    color: #718096;
    font-size: 1rem;
    display: flex;
    position: absolute;
    left: 25px;
    right: 25px;
    background-color: white;
    flex-direction: column;
    height: auto;
    border-radius: 0.375rem;
    &:hover {
        border: 1px solid #a0aec0;
    }
`;
