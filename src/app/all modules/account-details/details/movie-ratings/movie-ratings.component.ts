import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.css'],
})
export class MovieRatingsComponent implements OnInit {
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
    this.api.movie_ratings(this.session_id).subscribe((res: any) => {
      console.log(res);
      this.movies = res.results;
      // console.log(this.movies);
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }
}
