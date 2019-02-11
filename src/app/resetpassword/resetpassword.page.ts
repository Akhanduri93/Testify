import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Reset Password component */
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  model:any={
    'password':'',
    'confirmPassword':''
  }
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }

  /* Function for clicking on forgot password button, then route for login page */
  onSubmit(form){
    this.router.navigate(['/login']);
  }

}
