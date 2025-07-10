import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    //add Services
  ) {
    this.loginFormGroup = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmitLogin(): void {
    if (this.loginFormGroup.valid) {
      const raw = this.loginFormGroup.getRawValue();
      this.router.navigate(['/auth/login']);

    } else {
      this.loginFormGroup.markAllAsTouched();
    }
  }

}
