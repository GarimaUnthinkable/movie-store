import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-tv-watch',
  templateUrl: './tv-watch.component.html',
  styleUrls: ['./tv-watch.component.css'],
})
export class TvWatchComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  shows: any = [];

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.tv_watchlist(this.session_id).subscribe((res: any) => {
      console.log(res);
      this.shows = res.results;
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }
}
