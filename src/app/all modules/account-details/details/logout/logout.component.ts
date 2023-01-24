import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  session_details: any = JSON.parse(localStorage.getItem('session_details')!);
  session_id: any = this.session_details.session_id;
  user_pass: any = localStorage.getItem('user_pass');
  password: any;
  deleted = false;

  constructor(public api: ApiService, public route: Router) {}

  ngOnInit(): void {}

  delete() {
    if (this.password == this.user_pass) {
      console.log(this.user_pass);
      this.session_details = localStorage.removeItem('session_details');
      this.user_pass = localStorage.removeItem('user_pass');
      this.route.navigate(['/movies']);
    } else {
      this.deleted = true;
    }
  }
}
