import { Component, OnInit } from '@angular/core';
import {AccountServiceService} from "../../Services/account/account-service.service";
import {UserServiceService} from "../../Services/user/user-service.service";
import {User} from "../../User/user";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  _userList : any  ;
  _accountList : any;
  constructor(private accountService : AccountServiceService ,
              private  userService : UserServiceService) {

  }


  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this._userList = data;
    })
    this.accountService.getAllAccount().subscribe(data => {
      this._accountList = data;
    })
  }


}
