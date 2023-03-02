// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  return moviesArray.map(ele => ele.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let count = 0;
  moviesArray.filter(ele => {
    if (ele.genre.includes('Drama') && ele.director === 'Steven Spielberg') {
      count += 1;
    }
  });

  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let newFilteredArr = moviesArray.filter(ele => ele.score >= 0);

  let result =
    newFilteredArr.reduce(
      (average, movie) => average + movie.score,
      0
    ) / moviesArray.length;

  return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let dramaArray = moviesArray.filter(ele => ele.genre.includes('Drama'));

  let result =
    dramaArray.reduce((average, initialVal) => average + initialVal.score, 0) /
    dramaArray.length;

  if (!dramaArray.length) {
    return 0;
  } else {
    return Math.round(result * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const newMoviesArr = moviesArray.sort((a,b) => a.title.localeCompare(b.title));

  if (newMoviesArr.length >20){
    return newMoviesArr.slice(0,20).map(ele => ele.title);
  } else 

  return newMoviesArr.map(ele => ele.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  return moviesArray.map(movie =>{
    const time = movie.duration.split(' ');
  })


  console.log([hours, minutes])

  moviesArray.parseInt(hours, 10) * 60 + parseInt(minutes, 10);

  return

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
