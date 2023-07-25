import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  
  
  
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

 constructor(private accountService: AccountService) {  
 }
  
  ngOnInit(): void {

  }

  public register() {

    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        console.log("register.component.ts - register() - Error: ", error)
      },
      complete: () => {
        console.log("register.component.ts - register() - Completed!")
      } 
    }
    

    )
  }

  public cancel() {
    this.cancelRegister.emit(false);
  }

}
