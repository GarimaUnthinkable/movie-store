import { Component, OnInit } from '@angular/core';
import { ApiService } from '../others/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  videos: any = [];
  id: any;
  constructor(public api: ApiService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      if (res.video === 'false') {
        this.movieVideos();
      } else {
        this.tvVideos();
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
}
