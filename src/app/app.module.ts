import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './all modules/movies/movies.component';
import { AngularMaterialModule } from './all modules/others/material.module';
import { MovieDetailsComponent } from './all modules/movie-details/movie-details.component';
import { LoginComponent } from './all modules/login/login.component';
import { MovieMenuComponent } from './all modules/movie-menu/movie-menu.component';
import { TvMenuComponent } from './all modules/tv-menu/tv-menu.component';
import { PeopleComponent } from './all modules/actors/people/people.component';
import { PeopleDetailsComponent } from './all modules/actors/people-details/people-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './all modules/search/search.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MovieInfoComponent } from './all modules/movie-info/movie-info.component';
import { MediaComponent } from './all modules/media/media.component';
import { AccountDetailsComponent } from './all modules/account-details/account-details.component';
import { ListsComponent } from './all modules/account-details/details/lists/lists.component';
import { RatingsComponent } from './all modules/account-details/details/ratings/ratings.component';
import { WatchlistComponent } from './all modules/account-details/details/watchlist/watchlist.component';
import { LogoutComponent } from './all modules/account-details/details/logout/logout.component';
import { NewListComponent } from './all modules/new-list/new-list.component';
import { ListInfoComponent } from './all modules/list-info/list-info.component';
import { FavouritesComponent } from './all modules/account-details/details/favourites/favourites.component';
import { FavouriteMoviesComponent } from './all modules/account-details/details/favourite-movies/favourite-movies.component';
import { FavouriteShowsComponent } from './all modules/account-details/details/favourite-shows/favourite-shows.component';
import { MovieRatingsComponent } from './all modules/account-details/details/movie-ratings/movie-ratings.component';
import { TvRatingsComponent } from './all modules/account-details/details/tv-ratings/tv-ratings.component';
import { MovieWatchComponent } from './all modules/account-details/details/movie-watch/movie-watch.component';
import { TvWatchComponent } from './all modules/account-details/details/tv-watch/tv-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    LoginComponent,
    MovieMenuComponent,
    TvMenuComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    SearchComponent,
    MovieInfoComponent,
    MediaComponent,
    AccountDetailsComponent,
    ListsComponent,
    RatingsComponent,
    WatchlistComponent,
    LogoutComponent,
    NewListComponent,
    ListInfoComponent,
    FavouritesComponent,
    FavouriteMoviesComponent,
    FavouriteShowsComponent,
    MovieRatingsComponent,
    TvRatingsComponent,
    MovieWatchComponent,
    TvWatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxYoutubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
