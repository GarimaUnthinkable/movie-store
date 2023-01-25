import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css'],
})
export class ListInfoComponent implements OnInit {
  list_id: any;
  constructor(public route: ActivatedRoute, public api: ApiService) {}

  ngOnInit(): void {
    this.details();
  }

  details() {
    this.route.queryParams.subscribe((res: any) => {
      this.list_id = res.list_id;
      console.log(this.list_id);
      // this.api.list_details(this.list_id).subscribe((details: any) => {
      //   console.log(details);
      // });
    });
  }
}
