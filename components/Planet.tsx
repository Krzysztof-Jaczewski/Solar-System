'use client';

import styled from 'styled-components';
import { PlanetData } from 'types/types';

const PlanetCircle = styled.div<{ size: number; color: string }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    box-shadow: 0 0 8px ${({ color }) => color};
`;

interface PlanetProps extends PlanetData {}

export default function Planet({ size, color }: PlanetProps) {
    return <PlanetCircle size={size} color={color} />;
}
