import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-apidashboard',
  templateUrl: './apidashboard.component.html',
  styleUrls: ['./apidashboard.component.css'],
})
export class ApidashboardComponent implements OnInit {
  constructor(private data: UserAuthService) {}
  message: any | undefined;
  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
