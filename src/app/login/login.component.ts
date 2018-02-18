import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private storage: Storage = localStorage;

  username = '';

  constructor(
    private router: Router
  ) { }

  onSubmit() {
    this.storage.setItem('n', this.username);
    if(this.storage.getItem(this.username) === null) {
      this.storage.setItem(this.username, '1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0');
    };

    this.router.navigate(['/dashboard']);
  }
}
