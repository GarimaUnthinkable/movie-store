import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details.component';
import { LogoutComponent } from './details/logout/logout.component';
import { FavouriteMoviesComponent } from './details/favourite-movies/favourite-movies.component';
import { FavouriteShowsComponent } from './details/favourite-shows/favourite-shows.component';
import { FavouritesComponent } from './details/favourites/favourites.component';
import { ListsComponent } from './details/lists/lists.component';
import { MovieRatingsComponent } from './details/movie-ratings/movie-ratings.component';
import { MovieWatchComponent } from './details/movie-watch/movie-watch.component';
import { RatingsComponent } from './details/ratings/ratings.component';
import { TvRatingsComponent } from './details/tv-ratings/tv-ratings.component';
import { TvWatchComponent } from './details/tv-watch/tv-watch.component';
import { WatchlistComponent } from './details/watchlist/watchlist.component';

let routes: Routes = [
  {
    path: '',
    component: AccountDetailsComponent,
    children: [
      { path: 'delete-account', component: LogoutComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: '', component: FavouritesComponent },
      { path: 'favourite-movies', component: FavouriteMoviesComponent },
      { path: 'favourite-shows', component: FavouriteShowsComponent },
      { path: 'movie-ratings', component: MovieRatingsComponent },
      { path: 'tv-ratings', component: TvRatingsComponent },
      { path: 'movie-watch', component: MovieWatchComponent },
      { path: 'tv-watch', component: TvWatchComponent },
    ],
  },
  //   { path: 'account-details', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailsRoutingModule {}
