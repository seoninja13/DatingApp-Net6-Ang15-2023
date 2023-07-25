import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: any = {};
  registerMode: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("request completed")
    })
  }

  public registerToggle() {
    this.registerMode = !this.registerMode;
  }

  public cancelRegisterMode(event: boolean) {
    this.registerMode = event;
    
  }
  

}
