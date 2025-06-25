function generateModifiedOddSeries(a) {
    if (typeof a !== 'number' || a <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    const count = a % 2 === 0 ? a - 1 : a;
    const series = [];

    for (let i = 0; i < count; i++) {
        series.push(2 * i + 1);
    }

    console.log(series.join(', '));
}

generateModifiedOddSeries(10);
generateModifiedOddSeries(5);


