import React from 'react';
import { IconSize } from './IconSize';
import { IIconProps } from './IIconProps';

export const Icon = ({ name, size, service }: IIconProps) => (
    <span className={getClassName(size)}>{service.getIcon(name)}</span>
);

function getClassName(size: IconSize) {
    return `icon icon-${size}`;
}
