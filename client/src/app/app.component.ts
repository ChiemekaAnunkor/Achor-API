import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  message: any | undefined;
  constructor(private data: UserAuthService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
