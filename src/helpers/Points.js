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

    const placePeopleOnMap = config.strategiesStore.get('pointType');
    const locationOfPeople = placePeopleOnMap.run(config, nrOfPoints);

    let points = [];
    for (let i = 1; i <= nrOfPoints; i++) {
        const type = locationOfPeople[i] || 'default';
        const _neighbours = neighbours(i, parseInt(config.width), parseInt(config.height)).split(",");

        const point = {
            nr: i,
            isSelected: false,
            neighbours: _neighbours,
            type: type,
            weight: 10,
        };
        points.push(point);
    }

    return points;
}

export {
    initPoints
}