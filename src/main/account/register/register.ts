import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../app/core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(public authService: AuthService) {
    this.firstNameControl.valueChanges.subscribe(value => {
      this.authService.updateFirstName(value || '');
    });

    this.lastNameControl.valueChanges.subscribe(value => {
      this.authService.updateLastName(value || '');
    });

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
