import { Component, OnInit } from '@angular/core';
import { AccountService } from './_Services/account.service';
import { User } from './_Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    console.log('app.component.ts - ngOnInit() ');
    this.setCurrentUser();
  }

  public setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
    console.log('app.component.ts - setCurrentUser() User is: ', user);
  }
}
