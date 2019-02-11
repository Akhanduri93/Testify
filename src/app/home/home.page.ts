import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Home page component */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router:Router
  ){}

  /* Function for route on login page */
  signIn(){
    this.router.navigate(['/login'])
  }
}


