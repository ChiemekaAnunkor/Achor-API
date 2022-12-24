import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submit(login: any) {
    console.log('Form Submitted !', login.form.value);
  }
}
