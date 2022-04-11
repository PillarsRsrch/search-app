import React from 'react';
import { Layout } from '../layout/Layout';
import { ICardProps } from './ICardProps';

export const Card = ({ children }: ICardProps) => <Layout>{children}</Layout>;
