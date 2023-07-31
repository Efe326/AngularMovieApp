import { Component } from "@angular/core";
import {Movies} from '../movie.datasource';
import { Movie } from "../movie";

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
  movies = Movies;
  selectedMovie: Movie | null = null; 

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
