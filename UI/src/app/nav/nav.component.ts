import { Component } from '@angular/core';
import { AccountService } from '../_Services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  datingModel: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log('===> nav.component.ts - ngOnInit() ');
  }

  public login() {
    this.accountService.login(this.datingModel).subscribe({
      next: () => this.router.navigateByUrl("/members"),
      complete: () => console.log('Completed: ')
    });
  }

  public logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/")
  }
}
