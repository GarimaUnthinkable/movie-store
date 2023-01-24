import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  searchWord: any;
  popularMovies: any = [];
  freeMovies: any = [];
  latestMovies: any = [];
  trendingMovies: any = [];
  get_result: any = [];
  boolean = false;
  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.popular();
    this.free();
    this.latest();
    this.trending();
  }

  popularWatch() {
    let newMovies = this.popularMovies.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.popularMovies = newMovies;
  }
  popular() {
    this.api.getPopular().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.popularWatch();
    });
  }
  popularStreamingDetails() {
    this.api.getPopularMovieData().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.popularWatch();
    });
  }
  popularOnTvDetails() {
    this.api.getPopularTvData().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.popularWatch();
    });
  }
  popularForRentDetails() {
    this.api.getPopularOnRentData().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.popularWatch();
    });
  }
  popularInTheatersDetails() {
    this.api.getPopularInTheatersData().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.popularWatch();
    });
  }

  freeWatchMovies() {
    let newMovies = this.freeMovies.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.freeMovies = newMovies;
  }
  free() {
    this.api.getFree().subscribe((res: any) => {
      this.freeMovies = res.results;
      this.freeWatchMovies();
    });
  }
  freeMovieDetails() {
    this.api.getFreeMovieData().subscribe((res: any) => {
      this.freeMovies = res.results;
      this.freeWatchMovies();
    });
  }
  freeOnTvDetails() {
    this.api.getFreeTvData().subscribe((res: any) => {
      this.freeMovies = res.results;
      this.freeWatchMovies();
    });
  }

  latestWatch() {
    let newMovies = this.latestMovies.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.latestMovies = newMovies;
  }
  latest() {
    this.api.getLatest().subscribe((res: any) => {
      this.latestMovies = res.results;
      this.latestWatch();
    });
  }
  latestStreamingDetails() {
    this.api.getLatestMovieData().subscribe((res: any) => {
      this.latestMovies = res.results;
      this.latestWatch();
    });
  }
  latestOnTvDetails() {
    this.api.getLatestTvData().subscribe((res: any) => {
      this.latestMovies = res.results;
      this.latestWatch();
    });
  }
  latestForRentDetails() {
    this.api.getLatestOnRentData().subscribe((res: any) => {
      this.latestMovies = res.results;
      this.latestWatch();
    });
  }
  latestInTheatersDetails() {
    this.api.getLatestInTheatersData().subscribe((res: any) => {
      this.latestMovies = res.results;
      this.latestWatch();
    });
  }

  trendingWatch() {
    let newMovies = this.trendingMovies.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.trendingMovies = newMovies;
  }
  trending() {
    this.api.getTrending().subscribe((res: any) => {
      this.trendingMovies = res.results;
      this.trendingWatch();
    });
  }
  trendingDayDetails() {
    this.api.getTrendingDayData().subscribe((res: any) => {
      this.trendingMovies = res.results;
      this.trendingWatch();
    });
  }
  trendingWeekDetails() {
    this.api.getTrendingWeekData().subscribe((res: any) => {
      this.trendingMovies = res.results;
      this.trendingWatch();
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }

  movieWatch() {
    let newMovies = this.get_result.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.get_result = newMovies;
  }

  onSubmit() {
    let page = 1;

    this.api.searchBar(this.searchWord, page).subscribe((result: any) => {
      let movie_data = result.results;
      this.movieWatch();

      for (page = 2; page <= result.total_pages; page++) {
        this.api.searchBar(this.searchWord, page).subscribe((result: any) => {
          let movieData = result.results;
          this.movieWatch();
          this.boolean = true;
          this.api.data.next(this.get_result);
          this.get_result = [...movie_data, ...movieData];
        });
      }
    });
  }
}
