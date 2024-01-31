
class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if(!title || !director || !year || !genre) return undefined;
    const ckTitleExist = this.movies.find((m) => m.title.toLowerCase() == title.toLowerCase());
    if(ckTitleExist) return undefined;

    const movie = {
      title, director, year, genre
    };

    this.movies.push(movie);

    return movie;
  }

  updateMovie(title, updatedDetails) {
    const movie = this.movies.find((m) => m.title.toLowerCase() == title.toLowerCase());
    if(!movie) return undefined;

    if(updatedDetails.director) movie.director = updatedDetails.director;
    if(updatedDetails.genre) movie.genre = updatedDetails.genre;
    if(updatedDetails.year) movie.year = updatedDetails.year;

    return movie;
  }

  deleteMovieByTitle(title) {
    const movieIndex = this.movies.findIndex((m) => m.title.toLowerCase() === title.toLowerCase());
    const movie = this.movies[movieIndex] || undefined;

    if(!movie) {
      console.log('no movie deleted');
    } else {
      console.log(`a movie object ${movie} is deleted`);
      this.movies.splice(movieIndex, 1)
    }

    return this.movies;
  }
}

module.exports = Movies
