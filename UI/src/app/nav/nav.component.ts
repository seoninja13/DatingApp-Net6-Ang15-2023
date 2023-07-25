import { Component } from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  datingModel: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    console.log('===> nav.component.ts - ngOnInit() ');
  }

  public login() {
    this.accountService.login(this.datingModel).subscribe({
      next: (response) => {
        console.log('response is: ', response);
      },
      error: (error) => {
        console.log('Error: ', error);
      },
      complete: () => {
        console.log('Completed: ');
      },
    });

    console.log(this.datingModel);
  }

  public logout() {
    this.accountService.logout();
  }
}
