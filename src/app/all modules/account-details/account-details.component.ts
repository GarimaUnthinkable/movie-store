import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../others/api.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  session_id: any = localStorage.getItem('session_id');
  avatar: any;
  username: any;
  user_id: any;

  constructor(public api: ApiService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.account();
  }

  account() {
    this.api.account(this.session_id).subscribe((res: any) => {
      if (res.avatar.tmdb.avatar_path != null) {
        this.avatar = `https://image.tmdb.org/t/p/w200${res.avatar.tmdb.avatar_path}`;
      } else {
        this.avatar = `https://secure.gravatar.com/avatar/${res.avatar.gravatar.hash}.jpg?s=200`;
      }
      this.username = res.username;
      localStorage.setItem('account_id', res.id);
    });
  }
}
