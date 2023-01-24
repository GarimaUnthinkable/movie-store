import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
})
export class MovieInfoComponent implements OnInit {
  casts: any = [];
  crews: any = [];
  id: any;
  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      if (res.video === 'false') {
        this.movieCredits();
      } else {
        this.tvCredits();
      }
    });
  }

  movieCredits() {
    this.api.movieCredits(this.id).subscribe((res: any) => {
      let newCasts = res.cast.filter((path: any) => path.profile_path != null);
      let newCrews = res.crew.filter((path: any) => path.profile_path != null);
      this.crews = newCrews;
      this.casts = newCasts;
    });
  }

  tvCredits() {
    this.api.tvCredits(this.id).subscribe((res: any) => {
      let newCasts = res.cast.filter((path: any) => path.profile_path != null);
      let newCrews = res.crew.filter((path: any) => path.profile_path != null);
      this.crews = newCrews;
      this.casts = newCasts;
    });
  }

  getPeopleDetails(id: any) {
    this.router.navigate(['/people-details'], {
      queryParams: { id: id },
    });
  }
}
