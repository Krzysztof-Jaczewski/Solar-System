'use client';

import styled from 'styled-components';
import { planets } from 'data/planets';
import Planet from 'components/Planet';

const SolarSystemWrapper = styled.div`
    position: relative;
    width: 500px;
    height: 200px;
`;

const Orbit = styled.div<{ distance: number }>`
    position: absolute;
    top: 50%;
    left: 00px;
    height: ${({ distance }) => distance * 2}px;
    width: ${({ distance }) => distance * 2}px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid white;
    opacity: 1;
`;

const PlanetWrapper = styled.div<{ distance: number }>`
    position: absolute;
    top: 50%;
    left: ${({ distance }) => distance}px;
    transform: translate(-50%, -50%);
`;

export default function SolarSystem() {
    return (
        <SolarSystemWrapper>
            {planets.map((planet) => (
                <div key={`orbit-${planet.name}`}>
                    {!planet.isSun && <Orbit distance={planet.distance} />}
                    <PlanetWrapper key={planet.name} distance={planet.distance}>
                        <Planet {...planet} />
                    </PlanetWrapper>
                </div>
            ))}
        </SolarSystemWrapper>
    );
}
