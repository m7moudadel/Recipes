import { Component } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from 'src/app/Shared/loading/loading.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/Shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoadingComponent,
    AlertComponent],
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private _AuthService: AuthService,
  private _Router:Router,
  ) {}
  isLoading = false;

  messageError= null;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
  });


  onSubmit() {
    if (!this.form.invalid) {

    }
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this.isLoading = true;
      this._AuthService.regitser(email, password).subscribe(
        response => {
         console.log(response);
         this._Router.navigate(['/login'])
          this.isLoading = false;
        },errorMessage =>{
          this.isLoading = false;
          this.messageError =errorMessage
        }

      )
      this.form.reset()
    }

  onHandleEror(){
    this.messageError =null
  }

  loginPage(){
    this._Router.navigate(['/login'])
  }
}
