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
  email: string = '';
  passwordControl = new FormControl('', [Validators.required]);

  constructor(public authService: AuthService) {
    this.passwordControl.valueChanges.subscribe(value => {
      this.authService.validatePassword(value || '');
    });
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  onSubmit() {
    // Login logic
  }
}