import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apidashboard',
  templateUrl: './apidashboard.component.html',
  styleUrls: ['./apidashboard.component.css'],
})
export class ApidashboardComponent implements OnInit {
  constructor(private data: UserAuthService, private router: Router) {}
  apiMessage: any | undefined;
  ngOnInit(): void {
    this.data.currentApiMessage.subscribe(
      (apiMessage) => (this.apiMessage = apiMessage)
    );
    if (!this.apiMessage) {
      this.redirectToCollrections();
    }
  }

  redirectToCollrections() {
    this.router.navigate(['/collections']);
  }
}
