
function generateOddSeries(a) {
  if (typeof a !== 'number' || a <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  const series = [];

  for (let i = 0; i < a; i++) {
    series.push(2 * i + 1);
  }
  console.log(series.join(', '));
}

generateOddSeries(10); 
generateOddSeries(50); 