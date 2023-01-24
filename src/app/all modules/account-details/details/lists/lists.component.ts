import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  number_of_lists: any;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.lists();
  }

  lists() {
    this.api.lists(this.session_id).subscribe((res: any) => {
      this.number_of_lists = res.results;
    });
  }
}
