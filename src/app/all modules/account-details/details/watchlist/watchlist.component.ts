import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  shows: any;
  movies: any;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.movie_watchlist(this.session_id).subscribe((res: any) => {
      this.movies = res;
    });
    this.api.tv_watchlist(this.session_id).subscribe((res: any) => {
      this.shows = res;
    });
  }
}
