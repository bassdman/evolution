function ensureArray(elem) {
    if (Array.isArray(elem))
        return elem;

    return [elem];
}

function forEach(elem, fn) {
    for (let x of ensureArray(elem)) {
        fn(x);
    }
}

export { ensureArray, forEach }