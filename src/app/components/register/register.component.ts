import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordcheck: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  passwordValidator(): boolean {
    const { password, passwordcheck } = this.form.value;
    //console.log(values);

    return password === passwordcheck;
  }

  async registerUser() {
    console.log(this.form.value);
    const { username, password } = this.form.value;

    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(
        username,
        password
      );

      await this.router.navigate(['/login']);
    } catch (err) {
      this.error = err.message;
      this.form.reset();
      setTimeout(() => {
        this.error = '';
      }, 3000);
    }
  }
}
