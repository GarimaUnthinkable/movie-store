import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  number_of_lists: any;

  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.lists();
  }

  lists() {
    this.api.lists(this.session_id).subscribe((res: any) => {
      this.number_of_lists = res.results;
      console.log(this.number_of_lists);
    });
  }

  getDetails(id: any) {
    this.router.navigate(['/list-info'], {
      queryParams: { list_id: id },
    });
  }
}
