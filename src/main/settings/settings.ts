import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../app/core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  emailControl = new FormControl('');

  passwordControl = new FormControl('');
  confirmPasswordControl = new FormControl('');

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
