function nextPoint(current, points, strategiesStore) {
    const currentExtended = getPoint(current, points);
    const filterStrategy = strategiesStore.getters.get('filterNeighbours');
    const neighboursExtended = currentExtended.neighbours.map((n) =>
        getPoint(n, points)
    ).filter(filterStrategy.run);

    if (neighboursExtended.length == 0)
        return false;

    const totalWeight = getTotalWeight(neighboursExtended);

    const randomNumber = Math.random() * totalWeight;
    const nextPoint = getNextPoint(randomNumber, neighboursExtended);


    return nextPoint;
}

function getTotalWeight(neighbours) {
    let weight = 0;

    neighbours.forEach(neighbour => {
        weight += neighbour.weight;
    })
    return weight;
}

function getPoint(nr, points) {
    return points.filter(p => p.nr == nr)[0];
}

function getNextPoint(number, neighbours) {
    let current = 0;

    for (let neighbour of neighbours) {
        current += neighbour.weight;

        if (current >= number)
            return neighbour;
    }
}



export { nextPoint }