// data/planets.ts
import { PlanetData } from 'types/types';

export const planets: PlanetData[] = [
    {
        name: 'Słońce',
        color: 'yellow',
        size: 50,
        distance: 0,
        speed: 0,
        realDistance: 0,
        realSize: 1_392_700, // km
        isSun: true,
    },
    {
        name: 'Merkury',
        color: 'gray',
        size: 8,
        distance: 60,
        speed: 47.4,
        realDistance: 57.9,
        realSize: 4_879,
    },
    {
        name: 'Wenus',
        color: 'orange',
        size: 14,
        distance: 110,
        speed: 35.0,
        realDistance: 108.2,
        realSize: 12_104,
    },
    {
        name: 'Ziemia',
        color: 'blue',
        size: 15,
        distance: 160,
        speed: 29.8,
        realDistance: 149.6,
        realSize: 12_756,
    },
    {
        name: 'Mars',
        color: 'red',
        size: 12,
        distance: 210,
        speed: 24.1,
        realDistance: 227.9,
        realSize: 6_792,
    },
    {
        name: 'Jowisz',
        color: 'orange',
        size: 50,
        distance: 300,
        speed: 13.1,
        realDistance: 778.5,
        realSize: 142_984,
    },
    {
        name: 'Saturn',
        color: 'goldenrod',
        size: 26,
        distance: 370,
        speed: 9.7,
        realDistance: 1433.5,
        realSize: 120_536,
    },
    {
        name: 'Uran',
        color: 'lightblue',
        size: 22,
        distance: 430,
        speed: 6.8,
        realDistance: 2872.5,
        realSize: 51_118,
    },
    {
        name: 'Neptun',
        color: 'darkblue',
        size: 21,
        distance: 490,
        speed: 5.4,
        realDistance: 4495.1,
        realSize: 49_528,
    },
];
