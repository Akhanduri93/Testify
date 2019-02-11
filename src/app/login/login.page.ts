import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Login Component*/
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  model:any={
    'username':'',
    'password':''
  }
  isProcessing:boolean=false;
  isValid:boolean=false;
  ngOnInit() {
  }

  /* Function for successfully login and route for welcome page */
  onSubmit(form){
    /* checking username and password(if match, then route on welcome page )*/
    if(this.model.username==='admin' && this.model.password==='admin'){
      this.isProcessing=true;
      setTimeout(()=>{
        this.router.navigate(['/welcome']);
        this.isProcessing=false;
      },3000)
    } 
    /* if username and password don't match then show message */ 
      else{
      this.isValid=true;
      setTimeout(()=>{
        this.isValid=false;
        this.isProcessing=false;
      },5000);  
    }
  }
}
