import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css'],
})
export class FavouriteMoviesComponent implements OnInit {
  session_details: any = JSON.parse(localStorage.getItem('session_details')!);
  session_id: any = this.session_details.session_id;
  movies: any = [];

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.favourite_movies(this.session_id).subscribe((res: any) => {
      this.movies = res.results;
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }
}
