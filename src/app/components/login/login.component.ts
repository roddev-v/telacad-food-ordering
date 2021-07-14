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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errors: any;
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
    });
  }

  async loginUser() {
    const { username, password } = this.form.value;
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(
        username,
        password
      );

      this.router.navigate(['/tabs']);
      this.form.reset();

      console.log(result);
    } catch (err) {
      console.log(err);
      this.errors = err.message;
      this.form.reset();
      setTimeout(() => {
        this.errors = '';
      }, 3000);
    }
  }
}
