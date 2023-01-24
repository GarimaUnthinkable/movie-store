import { Component, OnInit } from '@angular/core';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  name: any;
  description: any;
  constructor(public api: ApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.api
      .create_list(this.session_id, this.name, this.description, 'en')
      .subscribe((res: any) => {});
  }
}
