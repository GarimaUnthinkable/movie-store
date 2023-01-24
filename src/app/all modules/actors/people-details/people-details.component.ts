import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../others/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent implements OnInit {
  person_id: any;
  person_data: any = [];
  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPersonId();
  }

  getPersonId() {
    this.route.queryParams.subscribe((res: any) => {
      this.person_id = res['id'];
      this.api.getPeopleData(this.person_id).subscribe((person) => {
        this.person_data = person;
      });
    });
  }
}
