export function getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function shuffleArray(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
