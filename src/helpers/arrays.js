function ensureArray(elem) {
    if (Array.isArray(elem))
        return elem;

    return [elem];
}

export { ensureArray }