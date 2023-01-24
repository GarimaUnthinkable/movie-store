import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  request_token: any;

  constructor(public api: ApiService, public router: Router) {}
  hide: any = true;

  onSubmit() {
    this.api.requestToken().subscribe((res: any) => {
      this.request_token = res.request_token;
      localStorage.setItem('user_pass', this.password);
      this.api
        .login(this.username, this.password, this.request_token)
        .subscribe((log: any) => {
          if (log.success == true) {
            this.request_token = log.request_token;
            this.api.session(this.request_token).subscribe((session: any) => {
              this.router.navigate(['/movies']).then;
              location.reload();
              let stringify = session.session_id;
              localStorage.setItem('session_id', stringify);
              console.log(JSON.parse(stringify), 'session_id');
            });
          }
        });
    });
  }
  ngOnInit(): void {}
}
