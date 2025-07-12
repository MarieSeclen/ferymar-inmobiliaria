import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  showPassword = false;

  loginError = false;

  // Credenciales temporales hardcodeadas
  private readonly TEMP_CREDENTIALS = {
    email: 'admin@ferymar.com',
    password: 'admin123'
  };


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService
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

      if (raw.email === this.TEMP_CREDENTIALS.email && raw.password === this.TEMP_CREDENTIALS.password) {
        // Login exitoso
        this.loginError = false;

        this.authService.login(raw.email);

        this.router.navigate(['/admin']);

      } else {
        this.loginError = true;
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'El email o la contraseña son incorrectos. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Intentar nuevamente',
          confirmButtonColor: '#3085d6'
        });
      }

    } else {
      this.loginFormGroup.markAllAsTouched();
    }
  }

}
