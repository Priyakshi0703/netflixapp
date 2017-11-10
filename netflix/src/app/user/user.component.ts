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
        // this.empIdFlag = 0;
        alert('User Added SuccesFully');
        }
      // else {
      //  // this.empIdFlag = 1;
      // }
    });
  }
  login(data) {
    console.log(data);
    const sendData = {
      email: data.loginemail,
      password: data.loginpassword,
    }
    this.connectService.loginUser(sendData).subscribe(res => {
      if (res.success) {
        console.log(res.data)
        alert(res.data);
        //route 
      } else {
        alert(res.data);
      }
    });
  }
}
