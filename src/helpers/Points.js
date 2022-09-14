import { getRandomNumbers } from '../helpers/random';

function getPoint(point, config) {
    const _neighbours = neighbours(point.index, parseInt(config.width), parseInt(config.height)).split(",");
    const type = getType(point);
    return {
        nr: point.index,
        isSelected: false,
        neighbours: _neighbours,
        type,
        weight: 10,
    };
}

function getType(point) {
    if (point.isGood) return "good";

    if (point.isEvil) return "evil";

    return "default";
}

function neighbours(point, totalWidth, totalHeigth) {
    const nextX = parseInt(point) + 1;
    const previousX = parseInt(point) - 1;
    const nextY = parseInt(point) + totalHeigth;
    const previousY = parseInt(point) - totalHeigth;

    const neighbours = [];

    if (nextX % totalWidth !== 1) neighbours.push(nextX);

    if (previousX % totalWidth > 0) neighbours.push(previousX);

    if (parseInt(nextY / totalHeigth) < totalHeigth) neighbours.push(nextY);

    if (previousY > 0 && parseInt(previousY / totalHeigth) >= 0)
        neighbours.push(previousY);

    return neighbours.toString();
}

function initPoints(config) {
    const nrOfPoints = (config.width || 10) * (config.height || 10);

    const positionsGood = getRandomNumbers(config.nrGood, 0, nrOfPoints);
    const positionsEvil = getRandomNumbers(config.nrEvil, 0, nrOfPoints, positionsGood);

    let points = [];
    for (let i = 1; i <= nrOfPoints; i++) {
        const pointConfig = {
            index: i,
            isGood: positionsGood.includes(i),
            isEvil: positionsEvil.includes(i)
        }
        const point = getPoint(pointConfig, config);
        points.push(point);
    }

    return points;
}

export {
    initPoints
}