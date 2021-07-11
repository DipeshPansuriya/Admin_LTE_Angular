import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginfrom: any;

  constructor(
    private _router: Router,
    private _loginfrom: FormBuilder,
    private _validation: ValidationService
  ) {
    this.loginfrom = this._loginfrom.group({
      email: ['', [Validators.required, _validation.emailValidator]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getMessage(controlname: string) {
    var msg = this._validation.errorMessage(
      this.loginfrom.controls[controlname]
    );
    return msg;
  }

  login(_form: any): void {
    Object.keys(_form.controls).forEach((controlName) =>
      _form.controls[controlName].markAsTouched()
    );
    if (_form.valid) {
      this._router.navigate(['/home']);
    }
  }
}
