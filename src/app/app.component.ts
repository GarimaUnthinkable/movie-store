import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './all modules/others/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movieStore';
  session: any = JSON.parse(localStorage.getItem('session_details')!);
  user_pass: any = localStorage.getItem('user_pass');

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  logout() {
    this.session = localStorage.removeItem('session_details');
    this.user_pass = localStorage.removeItem('user_pass');
    this.router.navigate(['/movies']);
  }
}
