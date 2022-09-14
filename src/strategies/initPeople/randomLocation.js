import { getRandomNumbers } from '../..//helpers/random';

const InitPeopleOnRandomPosition = {
    run: function(config, nrOfPoints) {
        const locations = {};
        const positionsGood = getRandomNumbers(config.nrGood, 0, nrOfPoints);
        const positionsEvil = getRandomNumbers(config.nrEvil, 0, nrOfPoints, positionsGood);

        for (let n of positionsGood) {
            locations[n] = 'good';
        }

        for (let n of positionsEvil) {
            locations[n] = 'evil';
        }
        return locations;
    },
    name: 'initPeopleOnRandomPosition',
    text: 'Place people on a random position'
}

export {
    InitPeopleOnRandomPosition
}