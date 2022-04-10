import React from 'react';
import { IconSize } from './IconSize';
import { IIconProps } from './IIconProps';

export const Icon = ({ svg, size }: IIconProps) => (
    <span className={getClassName(size)}>{svg}</span>
);

function getClassName(size: IconSize) {
    return `icon-${size}`;
}
