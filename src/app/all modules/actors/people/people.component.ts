import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../others/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: any = [];
  page: any = 1;
  button: any = false;

  constructor(public api: ApiService, public router: Router) {}

  watch() {
    let newPeople = this.people.filter(
      (path: any) => path.profile_path != null
    );
    this.people = newPeople;
  }

  popularPeople() {
    this.api.getPeople(this.page).subscribe((res: any) => {
      this.people = res.results;
      this.watch();
    });
  }

  loadMore() {
    if (!this.button) {
      this.api.getPeople(this.page++).subscribe((res: any) => {
        this.people = res.results;
        this.watch();
      });
    } else {
      return this.button;
    }
  }

  prePage() {
    if (!this.button) {
      this.api.getPeople(this.page--).subscribe((res: any) => {
        this.people = res.results;
        this.watch();
      });
    } else {
      return this.button;
    }
  }

  getId(peopleId: any) {
    this.router.navigate(['/people-details'], {
      queryParams: { id: peopleId },
    });
  }

  ngOnInit(): void {
    this.popularPeople();
  }
}
