import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie | null = null;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  save(): void {
    if (this.movie) {
      this.movieService.update(this.movie)
        .subscribe(() => {
          this.location.back();
        });
    }
  }

  getMovie(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (idString) {
      const id = parseInt(idString, 10);
      this.movieService.getMovie(id)
        .subscribe(movie => this.movie = movie);
    }
  }
}
