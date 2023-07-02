import { Component, OnInit, OnDestroy } from '@angular/core';
// import { LoginService } from '../services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usernameField!: string; 
  passwordField!: string;

  private unsubscribe$ = new Subject<void>();
  // constructor(private loginService: LoginService, private router: Router) { }
  constructor (private router: Router) {};

  ngOnInit() {
  }

  handleLogin() {

    const credentials = { username: this.usernameField, password: this.passwordField };

    
    this.router.navigate(['./landing-page']);
    // Dummy API Login Implementation
    // this.loginService.login(credentials)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(
    //     (response) => {
    //       this.router.navigate(['./home-screen']);
    //     },
    //     (error) => {
    //       // Handle error
    //       console.error(error);
    //     }
    //   );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
