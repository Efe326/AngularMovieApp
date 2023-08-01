import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styles: [`
    .list-group-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .list-group-item .badge-primary {
      margin-right: 10px;
      color: black;
    }

    .close {
      cursor: pointer;
      color: red;
      font-weight: bold;
    }
  `]
})
export class MoviesComponent {
  title = 'Movie List';
  movies : Movie[] | null = null;  
  selectedMovie: Movie | null = null; 

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies():void {
        this.movieService.getMovies()
                    .subscribe(movies=> {
                      this.movies = movies;
                    });
  }
}