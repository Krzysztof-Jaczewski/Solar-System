'use client';

import styled from 'styled-components';

const Planet = styled.div`
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #5a5a5a, #000);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    animation: spin 10s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export default Planet;
