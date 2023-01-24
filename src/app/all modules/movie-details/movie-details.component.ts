import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  data: any = [];
  trailer: any = [];
  video: any;
  credits: any = [];
  maxCredits: any = 10;
  videos: any = [];
  images: any = [];
  favourite: any = false;
  watchlist: any = false;
  session_id: any = localStorage.getItem('session_id');
  account_id: any = localStorage.getItem('account_id');

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      if (res.video === 'false') {
        this.movieData();
        this.movieCredits();
        this.movieVideos();
      } else {
        this.tvData();
        this.tvCredits();
        this.tvVideos();
      }
    });
  }

  movieData() {
    this.api.getMovie(this.id).subscribe((movie: any) => {
      this.data = movie;
      if (movie.videos.results.length > 0) {
        this.trailer = movie.videos.results;
        this.video = this.trailer.find((item: any) => item.type === 'Trailer');
      }
    });
  }

  tvData() {
    this.api.getTv(this.id).subscribe((tv: any) => {
      this.data = tv;
      if (tv.videos.results.length > 0) {
        this.trailer = tv.videos.results;
        this.video = this.trailer.find((item: any) => item.type === 'Trailer');
      }
    });
  }

  movieCredits() {
    this.api.movieCredits(this.id).subscribe((res: any) => {
      this.credits = res.cast;
      let newCredits = this.credits.filter(
        (path: any) => path.profile_path != null
      );
      if (this.credits.length < this.maxCredits) {
        this.credits = newCredits;
      } else {
        let limitcount = newCredits.splice(0, this.maxCredits);
        this.credits = limitcount;
      }
    });
  }

  tvCredits() {
    this.api.tvCredits(this.id).subscribe((res: any) => {
      this.credits = res.cast;
      let newCredits = this.credits.filter(
        (path: any) => path.profile_path != null
      );
      if (this.credits.length < this.maxCredits) {
        this.credits = newCredits;
      } else {
        let limitcount = newCredits.splice(0, this.maxCredits);
        this.credits = limitcount;
      }
    });
  }

  tvVideos() {
    this.api.tvVideos(this.id).subscribe((video: any) => {
      if (video.results.length > 0) {
        this.videos = video.results;
      }
    });
  }

  movieVideos() {
    this.api.movievideos(this.id).subscribe((video: any) => {
      if (video.results.length > 0) {
        this.videos = video.results;
      }
    });
  }

  getCastsCrews(id: any, video: any) {
    this.router.navigate(['/movie-info'], {
      queryParams: { id: id, video: video },
    });
  }

  getMedia(id: any, video: any) {
    this.router.navigate(['/media'], {
      queryParams: { id: id, video: video },
    });
  }

  getPeopleDetails(id: any) {
    this.router.navigate(['/people-details'], {
      queryParams: { id: id },
    });
  }

  favourite_() {
    if ((this.favourite = !this.favourite)) {
      this.route.queryParams.subscribe((res: any) => {
        this.id = res.id;
        if (res.video === 'false') {
          this.movieData();
          console.log(this.data);
          this.api
            .add_favourite(
              this.account_id,
              this.session_id,
              this.data.id,
              'movie',

              true
            )
            .subscribe((res: any) => {
              console.log(res);
            });
        } else {
          this.tvData();
          console.log(this.data);
          this.api
            .add_favourite(
              this.account_id,
              this.session_id,
              this.data.id,
              'tv',
              true
            )
            .subscribe((res: any) => {
              console.log(res);
            });
        }
      });
    }
  }

  watchlist_() {
    if ((this.watchlist = !this.watchlist)) {
      this.route.queryParams.subscribe((res: any) => {
        this.id = res.id;
        if (res.video === 'false') {
          this.movieData();
          console.log(this.data);
          this.api
            .add_watchlist(
              this.account_id,
              this.session_id,
              this.data.id,
              'movie',

              true
            )
            .subscribe((res: any) => {
              console.log(res);
            });
        } else {
          this.tvData();
          console.log(this.data);
          this.api
            .add_watchlist(
              this.account_id,
              this.session_id,
              this.data.id,
              'tv',
              true
            )
            .subscribe((res: any) => {
              console.log(res);
            });
        }
      });
    }
  }
}
