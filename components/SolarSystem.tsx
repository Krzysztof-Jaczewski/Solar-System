'use client';

import styled from 'styled-components';
import { planets } from 'data/planets';
import Planet from 'components/Planet';
import { useState } from 'react';
import { PlanetData } from 'types/types';
import Modal from 'components/Modal';

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
    opacity: 0.5;
`;

const PlanetWrapper = styled.div<{ distance: number }>`
    position: absolute;
    top: 50%;
    left: ${({ distance }) => distance}px;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const SolarSystem = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(
        null
    );
    console.log(selectedPlanet);
    return (
        <SolarSystemWrapper>
            {planets.map((planet) => (
                <div key={`orbit-${planet.name}`}>
                    {!planet.isSun && <Orbit distance={planet.distance} />}
                    <PlanetWrapper
                        distance={planet.distance}
                        onClick={() => setSelectedPlanet(planet)}
                    >
                        <Planet {...planet} />
                    </PlanetWrapper>
                </div>
            ))}
            {selectedPlanet && (
                <Modal
                    onClose={() => setSelectedPlanet(null)}
                    planet={selectedPlanet}
                />
            )}
        </SolarSystemWrapper>
    );
};

export default SolarSystem;
