import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  session_details: any = JSON.parse(localStorage.getItem('session_details')!);
  session_id: any = this.session_details.session_id;
  shows: any;
  movies: any;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.movie_ratings(this.session_id).subscribe((res: any) => {
      this.movies = res;
    });
    this.api.tv_ratings(this.session_id).subscribe((res: any) => {
      this.shows = res;
    });
  }
}
