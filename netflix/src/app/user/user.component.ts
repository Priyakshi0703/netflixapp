import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private connectService: ConnectService, private router: Router) { }

  ngOnInit() {
  }
  userInput = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: 2
  };
  loginForm = {
    email: '',
    password: '',
  }
  signup(value) {
    this.connectService.postUser(this.userInput).subscribe(res => {
      if (res.success == true) {
        alert('User Added SuccesFully');
      }
      else{
        alert(res.data);
      }
    });
  }
  login(data) {
    console.log(data);
    const sendData = {
      email: data.loginemail,
      password: data.loginpassword,
    }
    this.connectService.loginUser(sendData).subscribe(res => {
      console.log(res);
      if (res.success) {
        localStorage.setItem("loginStatus", res.body.role);
        localStorage.setItem("mytoken", res.body.JWTtoken);
        if (res.body.role == 1) {
          this.router.navigate(['/admin']);
        }
        else if (res.body.role == 2) {
          this.router.navigate(['/newuser']);

        }
      } else {
        alert(res.data);
      }
    });
  }
}
