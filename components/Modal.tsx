'use client';

import styled from 'styled-components';
import { PlanetData } from 'types/types';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalBox = styled.div`
    background: black;
    padding: 24px;
    border: 1px solid white;
    border-radius: 12px;
    color: white;
    min-width: 300px;
`;

interface ModalProps {
    planet: PlanetData;
    onClose: () => void;
}

const Modal = ({ planet, onClose }: ModalProps) => (
    <Backdrop onClick={onClose}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
            <h2>{planet.name}</h2>
            <p>Rozmiar: {planet.size}</p>
            <p>Kolor: {planet.color}</p>
            <p>Odległość: {planet.distance}</p>
            {planet.isSun && <p>To jest Słońce</p>}
        </ModalBox>
    </Backdrop>
);

export default Modal;
