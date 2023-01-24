import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  shows: any;
  movies: any;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.favourite_shows(this.session_id).subscribe((res: any) => {
      this.shows = res;
    });
    this.api.favourite_movies(this.session_id).subscribe((res: any) => {
      this.movies = res;
    });
  }
}
