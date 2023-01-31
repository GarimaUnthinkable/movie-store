import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  list_id: any;
  session_id: any = localStorage.getItem('session_id');
  number_of_lists: any;

  constructor(
    public api: ApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lists();
  }

  lists() {
    this.api.lists(this.session_id).subscribe((res: any) => {
      this.number_of_lists = res.results;
      this.list_id = this.number_of_lists.id;
    });
  }

  clear_list() {
    this.route.queryParams.subscribe((res: any) => {
      this.list_id = res.list_id;
      this.api
        .clear_list(this.session_id, this.list_id, true)
        .subscribe((res: any) => {});
    });
  }

  delete_list() {
    this.route.queryParams.subscribe((res: any) => {
      this.list_id = res.list_id;
      this.api
        .delete_list(this.session_id, this.list_id)
        .subscribe((res: any) => {});
    });
  }

  getDetails(id: any) {
    this.router.navigate(['/account-details/lists'], {
      queryParams: { list_id: id },
    });
  }
}
