export function secondsToMinutes(durationInSeconds: number): string {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const secondsString = seconds.toFixed(0).padStart(2, '0');

    return `${minutes}:${secondsString}`;
}