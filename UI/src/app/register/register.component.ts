import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_Services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: (error) => {
        this.toastr.error(error.error),
          console.log(error);
      },
      complete: () =>
        console.log('register.component.ts - register() - Completed!'),
    });
  }

  public cancel() {
    this.cancelRegister.emit(false);
  }
}
