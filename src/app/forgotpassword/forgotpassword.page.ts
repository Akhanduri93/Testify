import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Forgot Password component */
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  model:any={
    'email':''
  }
  isProcessing:boolean=false;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }

  /*Function for submit email for forgot password and route for resetPassword */
  onSubmit(form){
    this.isProcessing=true;
    setTimeout(()=>{
      this.isProcessing=false;
      this.router.navigate(['/resetpassword']);
    },3000)
    
  }

}
