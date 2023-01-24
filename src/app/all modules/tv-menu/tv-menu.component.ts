import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-on-tv',
  templateUrl: './tv-menu.component.html',
  styleUrls: ['./tv-menu.component.css'],
})
export class TvMenuComponent implements OnInit {
  shows: any = [];
  page: any = 2;
  button: any = false;

  constructor(
    public api: ApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  watch() {
    let newshows = this.shows.filter(
      (path: any) => path.poster_path != null && path.backdrop_path != null
    );
    this.shows = newshows;
  }

  popularTv() {
    this.route.queryParams.subscribe((params: any) => {
      this.api.getTvShows(1, params['type']).subscribe((res: any) => {
        if (res.results != null) {
          this.shows = res.results;
          this.watch();
        } else {
          this.api
            .getTvShows(this.page++, params['type'])
            .subscribe((res: any) => {
              this.shows = res.results;
              this.watch();
            });
        }
      });
    });
  }

  loadMore() {
    this.route.queryParams.subscribe((params: any) => {
      if (!this.button) {
        this.api
          .getTvShows(this.page++, params['type'])
          .subscribe((res: any) => {
            if (res.results != null) {
              this.shows = res.results;
              this.watch();
            } else {
              this.api
                .getTvShows(this.page++, params['type'])
                .subscribe((res: any) => {
                  this.shows = res.results;
                  this.watch();
                });
            }
          });
      } else {
        return this.button;
      }
    });
  }

  prePage() {
    this.route.queryParams.subscribe((params: any) => {
      if (!this.button) {
        this.api
          .getTvShows(this.page++, params['type'])
          .subscribe((res: any) => {
            if (res.results != null) {
              this.shows = res.results;
              this.watch();
            } else {
              this.api
                .getTvShows(this.page++, params['type'])
                .subscribe((res: any) => {
                  this.shows = res.results;
                  this.watch();
                });
            }
          });
      } else {
        return this.button;
      }
    });
  }

  getId(showId: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: showId },
    });
  }

  ngOnInit(): void {
    this.popularTv();
  }
}
