import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './all modules/movie-details/movie-details.component';
import { LoginComponent } from './all modules/login/login.component';
import { MoviesComponent } from './all modules/movies/movies.component';
import { MovieMenuComponent } from './all modules/movie-menu/movie-menu.component';
import { TvMenuComponent } from './all modules/tv-menu/tv-menu.component';
import { PeopleComponent } from './all modules/actors/people/people.component';
import { PeopleDetailsComponent } from './all modules/actors/people-details/people-details.component';
import { SearchComponent } from './all modules/search/search.component';
import { MovieInfoComponent } from './all modules/movie-info/movie-info.component';
import { MediaComponent } from './all modules/media/media.component';
import { LoginGuard } from './all modules/login/login.guard';
import { AccountGuard } from './all modules/account-details/account.guard';
import { NewListComponent } from './all modules/new-list/new-list.component';

let routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent, canActivate: [AccountGuard] },
  { path: 'movie-menu', component: MovieMenuComponent },
  { path: 'tv-menu', component: TvMenuComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people-details', component: PeopleDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie-info', component: MovieInfoComponent },
  { path: 'media', component: MediaComponent },
  {
    path: 'account-details',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import(
        '../app/all modules/account-details/account-details-routing.module'
      ).then((m) => m.AccountDetailsRoutingModule),
  },
  { path: 'new-list', component: NewListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
