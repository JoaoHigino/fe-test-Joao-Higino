function sinceReleased(releaseDate) {
    const specificDate = releaseDate
    const todayDate = new Date();
    const diffInMs = Math.abs(todayDate - specificDate);
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
    const diffInYearsRounded = Math.round(diffInYears);
    return diffInYearsRounded;
}

module.exports = { sinceReleased };