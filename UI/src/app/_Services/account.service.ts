import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../_Models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  postLoginRoute = 'account/login';
  postRegisterRoute = 'account/register';

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  public login(model: any) {
    return this.http.post<User>(this.baseUrl + this.postLoginRoute, model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  public register(model: any) {
    return this.http.post<User>(this.baseUrl + this.postRegisterRoute, model).pipe(
      map(user => {
        console.log("Response: ", user);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      }
      )
    )
  }


  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  public logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
