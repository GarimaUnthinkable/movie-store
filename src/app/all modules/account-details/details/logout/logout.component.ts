import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/all modules/others/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  user_pass: any = localStorage.getItem('user_pass');
  account: any = localStorage.getItem('account_id');
  password: any;
  deleted = false;

  constructor(public api: ApiService, public route: Router) {}

  ngOnInit(): void {}

  delete() {
    if (this.password == this.user_pass) {
      this.session_id = localStorage.removeItem('session_id');
      this.user_pass = localStorage.removeItem('user_pass');
      this.account = localStorage.removeItem('account_id');
      this.route.navigate(['/movies']);
    } else {
      this.deleted = true;
    }
  }
}
