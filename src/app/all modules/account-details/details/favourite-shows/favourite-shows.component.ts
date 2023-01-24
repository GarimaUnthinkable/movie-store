import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-favourite-shows',
  templateUrl: './favourite-shows.component.html',
  styleUrls: ['./favourite-shows.component.css'],
})
export class FavouriteShowsComponent implements OnInit {
  session_details: any = JSON.parse(localStorage.getItem('session_details')!);
  session_id: any = this.session_details.session_id;
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
    this.api.favourite_shows(this.session_id).subscribe((res: any) => {
      this.shows = res.results;
    });
  }

  getId(movieId: any, video: any) {
    this.router.navigate(['/movie-details'], {
      queryParams: { id: movieId, video: video },
    });
  }
}
