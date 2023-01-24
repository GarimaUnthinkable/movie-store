import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './movie-menu.component.html',
  styleUrls: ['./movie-menu.component.css'],
})
export class MovieMenuComponent implements OnInit {
  movies: any = [];
  page: any = 2;
  button: any = false;

  constructor(
    public api: ApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  watch() {
    let newMovies = this.movies.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.movies = newMovies;
  }

  popularMovies() {
    this.route.queryParams.subscribe((params: any) => {
      this.api.getMovies(1, params['type']).subscribe((res: any) => {
        if (res.results != null) {
          this.movies = res.results;
          this.watch();
        } else {
          this.api
            .getMovies(this.page++, params['type'])
            .subscribe((res: any) => {
              this.movies = res.results;
              this.watch();
            });
        }
      });
    });
  }

  prePage() {
    this.route.queryParams.subscribe((params: any) => {
      if (!this.button) {
        this.api
          .getMovies(this.page--, params['type'])
          .subscribe((res: any) => {
            if (res.results != null) {
              this.movies = res.results;
              this.watch();
            } else {
              this.api
                .getMovies(this.page++, params['type'])
                .subscribe((res: any) => {
                  this.movies = res.results;
                  this.watch();
                });
            }
          });
      } else {
        return this.button;
      }
    });
  }

  loadMoreMovies() {
    this.route.queryParams.subscribe((params: any) => {
      if (!this.button) {
        this.api
          .getMovies(this.page++, params['type'])
          .subscribe((res: any) => {
            if (res.results != null) {
              this.movies = res.results;
              this.watch();
            } else {
              this.api
                .getMovies(this.page++, params['type'])
                .subscribe((res: any) => {
                  this.movies = res.results;
                  this.watch();
                });
            }
          });
      } else {
        return this.button;
      }
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }

  ngOnInit(): void {
    this.popularMovies();
  }
}
