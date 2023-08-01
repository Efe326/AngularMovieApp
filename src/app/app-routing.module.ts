import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const Routes: Routes=[
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path: 'movies', component: MoviesComponent}
];


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(Routes)]
})
export class AppRoutingModule { }