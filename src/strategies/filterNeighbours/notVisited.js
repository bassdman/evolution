const FilterNotVisitedNeighboursStrategy = {
    run: function run(neighbour) {
        return !neighbour.visited && neighbour.type !== 'start';
    },
    name: 'notVisited',
    text: 'Alle Nachbarn, die noch nicht besucht wurden'
}

export {
    FilterNotVisitedNeighboursStrategy
}