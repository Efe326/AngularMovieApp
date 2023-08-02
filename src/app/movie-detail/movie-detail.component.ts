import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  //localhost:4200/detail/2
  @Input() movie: Movie | null = null;

  constructor(
    private MovieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovie();
    
  }

  getMovie(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (idString) {
      const id = parseInt(idString, 10);
      this.MovieService.getMovie(id)
        .subscribe(movie => this.movie = movie);
    }
  }
}  