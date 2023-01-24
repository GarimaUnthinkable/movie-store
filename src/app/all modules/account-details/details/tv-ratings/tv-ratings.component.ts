import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-tv-ratings',
  templateUrl: './tv-ratings.component.html',
  styleUrls: ['./tv-ratings.component.css'],
})
export class TvRatingsComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
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
    this.api.tv_ratings(this.session_id).subscribe((res: any) => {
      this.movies = res.results;
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }
}
