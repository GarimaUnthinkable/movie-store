import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  data: Subject<string> = new Subject();

  getMovies(page: any, movie_type: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movie_type}?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=${page}`
    );
  }

  getTvShows(page: any, show_type: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${show_type}?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=${page}`
    );
  }

  getPeople(page: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=${page}`
    );
  }

  getPopular() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=1`
    );
  }

  getPopularMovieData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=19`
    );
  }

  getPopularTvData() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=20`
    );
  }

  getPopularOnRentData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=97`
    );
  }

  getPopularInTheatersData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=3`
    );
  }

  getFree() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=10`
    );
  }

  getFreeMovieData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=27`
    );
  }

  getFreeTvData() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=1`
    );
  }

  getLatest() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=100`
    );
  }

  getLatestMovieData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=23`
    );
  }

  getLatestTvData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=28`
    );
  }

  getLatestOnRentData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=8`
    );
  }

  getLatestInTheatersData() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&page=26`
    );
  }

  getTrending() {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=dc36a9d24ba49049b50da08301e79784`
    );
  }

  getTrendingDayData() {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=dc36a9d24ba49049b50da08301e79784`
    );
  }

  getTrendingWeekData() {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=dc36a9d24ba49049b50da08301e79784`
    );
  }

  getMovie(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dc36a9d24ba49049b50da08301e79784&append_to_response=videos`
    );
  }

  getTv(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=dc36a9d24ba49049b50da08301e79784&append_to_response=videos`
    );
  }

  getPeopleData(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US`
    );
  }

  searchBar(query: any, page: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
  }

  movieCredits(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US`
    );
  }

  tvCredits(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US`
    );
  }

  tvVideos(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US`
    );
  }

  movievideos(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US`
    );
  }

  requestToken() {
    return this.http.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=dc36a9d24ba49049b50da08301e79784`
    );
  }

  login(username: any, password: any, request_token: any) {
    return this.http.post(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=dc36a9d24ba49049b50da08301e79784`,
      { username, password, request_token }
    );
  }

  session(request_token: any) {
    return this.http.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=dc36a9d24ba49049b50da08301e79784`,
      { request_token }
    );
  }

  account(session: any) {
    return this.http.get(`
    https://api.themoviedb.org/3/account?api_key=dc36a9d24ba49049b50da08301e79784&session_id=${session}`);
  }

  lists(session: any) {
    return this.http.get(`
    https://api.themoviedb.org/3/account/%7Baccount_id%7D/lists?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&page=1`);
  }

  favourite_movies(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=dc36a9d24ba49049b50da08301e79784&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`
    );
  }

  favourite_shows(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/tv?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&sort_by=created_at.asc&page=1`
    );
  }

  movie_ratings(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/rated/movies?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&sort_by=created_at.asc&page=1`
    );
  }

  tv_ratings(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/rated/tv?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&sort_by=created_at.asc&page=1`
    );
  }

  movie_watchlist(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/watchlist/movies?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&sort_by=created_at.asc&page=1`
    );
  }

  tv_watchlist(session: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/account/%7Baccount_id%7D/watchlist/tv?api_key=dc36a9d24ba49049b50da08301e79784&language=en-US&session_id=${session}&sort_by=created_at.asc&page=1`
    );
  }

  add_favourite(
    account: any,
    session: any,
    media_id: any,
    media_type: any,
    favorite: any
  ) {
    return this.http.post(
      `
    https://api.themoviedb.org/3/account/${account}/favorite?api_key=dc36a9d24ba49049b50da08301e79784&session_id=${session}`,
      { media_id, media_type, favorite }
    );
  }

  add_watchlist(
    account: any,
    session: any,
    media_id: any,
    media_type: any,
    watchlist: any
  ) {
    return this.http.post(
      `https://api.themoviedb.org/3/account/${account}/watchlist?api_key=dc36a9d24ba49049b50da08301e79784&session_id=${session}`,
      { media_id, media_type, watchlist }
    );
  }
}
