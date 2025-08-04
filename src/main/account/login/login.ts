import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../app/core/services/auth.service';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(public authService: AuthService) {
    this.emailControl.valueChanges.subscribe(value => {
      this.authService.updateEmail(value || '');
    });

    this.passwordControl.valueChanges.subscribe(value => {
      this.authService.updatePassword(value || '');
    });
  }

  onSubmit() {
    // Login logic
  }
}