function getRandomNumbers(nr = 10, min = 0, max = 100, ignoreList = []) {
    const saved = [];

    while (saved.length < nr) {
        const randomNr = Math.floor(Math.random() * (max - min) + min);

        if (saved.includes(randomNr) && !ignoreList.includes(randomNr))
            continue;

        saved.push(randomNr);
    }

    return saved;
}

function randomText() {
    return (Math.random() + 1).toString(36).substring(7) + (Math.random() + 1).toString(36).substring(7);
}

export { getRandomNumbers, randomText }