import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const Routes: Routes=[
  {path: 'movies', component: MoviesComponent}
];


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(Routes)]
})
export class AppRoutingModule { }
