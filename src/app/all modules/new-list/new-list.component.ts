import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  name: any;
  description: any;
  constructor() {}

  ngOnInit(): void {}

  new_list() {
    console.log(this.name, 'name');
    console.log(this.description, 'description');
  }
}
