import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css'],
})
export class TestErrorComponent {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: (response) => console.log('400 response is: ', response),
      error: (error) => console.log('error is: ', error),
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: (response) => console.log('400 validation response is: ', response),
      error: (error) => {
        console.log('error is: ', error),
        this.validationErrors = error;
    },
    });
  }

  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: (response) => console.log('401 response is: ', response),
      error: (error) => console.log('error is: ', error),
    });
  }

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: (response) => console.log('404 response is: ', response),
      error: (error) => console.log('error is: ', error),
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: (response) => console.log('500 response is: ', response),
      error: (error) => console.log('error is: ', error),
    });
  }
}
