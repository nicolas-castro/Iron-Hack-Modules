/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function definition
function turnHoursToMinutes (timeString){
    const timeItems = timeString.split(' ');
    const minutes = Number.parseInt(timeItems[1]);
    const hours = Number.parseInt(timeItems[0]);
    return minutes + hours * 60;
  }
  
// function expression
const turnHoursToMinutes2 = timeString => {
    const timeItems = timeString.split(' ');
    const minutes = Number.parseInt(timeItems[1]);
    const hours = Number.parseInt(timeItems[0]);
    return minutes + hours * 60;
  }

movies.map(movie => {
    const lengthMinutes = turnHoursToMinutes(movie.duration);
    return {...movie, duration: lengthMinutes}
})

// Get the average of all rates with 2 decimals 

const ratingsAverage = (
    movies.reduce((total, movie) => 
    {return total + +movie.rate}, 0) / movies.length
).toFixed(2);

// Get the average of Drama Movies

const dramaMovies = movies.filter(movie=>movie.genre.includes("drama"))

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
