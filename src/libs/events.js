let lastPositionScroll = window.scrollY,
    lastPositionX = 0,
    lastPositionY = 0,
    moveX = 0,
    moveY = 0,
    isInitialMoveEvent = true,
    mouseDown = false;

document.addEventListener("scroll", () => {
    const direction = lastPositionScroll < window.scrollY ? 'up' : 'down';
    lastPositionScroll = window.scrollY;

    if (direction == 'up')
        document.dispatchEvent(new CustomEvent('scroll-up', { lastPosition: lastPositionScroll, currentPosition: window.scrollY }));

    else
        document.dispatchEvent(new CustomEvent('scroll-down', { lastPosition: lastPositionScroll, currentPosition: window.scrollY }));
});

document.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.addEventListener("mouseup", () => {
    mouseDown = false;
    isInitialMoveEvent = true;
});

document.addEventListener("mousemove", (event) => {
    if (!mouseDown)
        return;

    if (isInitialMoveEvent) {
        lastPositionX = event.offsetX;
        lastPositionY = event.offsetY;
        isInitialMoveEvent = false;
        return;
    }

    moveX = event.offsetX - lastPositionX;
    moveY = event.offsetY - lastPositionY;

    lastPositionX = event.offsetX;
    lastPositionY = event.offsetY;

    document.dispatchEvent(new CustomEvent('mousedownmove', {
        detail: { moveX, moveY }
    }));
});