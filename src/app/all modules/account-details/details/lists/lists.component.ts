import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  session_details: any = JSON.parse(localStorage.getItem('session_details')!);
  session_id: any = this.session_details.session_id;
  number_of_lists: any;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.lists();
  }

  lists() {
    this.api.lists(this.session_id).subscribe((res: any) => {
      console.log(res);
      this.number_of_lists = res.results;
    });
  }
}
