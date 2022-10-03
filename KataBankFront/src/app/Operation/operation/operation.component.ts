import { Component, OnInit } from '@angular/core';
import {OperationServiceService} from "../../Services/operation/operation-service.service";
import {AccountServiceService} from "../../Services/account/account-service.service";
import {UserServiceService} from "../../Services/user/user-service.service";
import {Operation} from "../operation";
import {Account} from "../../Account/account";
import {User} from "../../User/user";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  _operationList : Operation[]  ;
  _accountList : Account[];
  _userList : User[];
  accountSelected = true;
  selectedDevice: any;

  constructor(private operationService:OperationServiceService,
              private  accountService : AccountServiceService,
              private  userService : UserServiceService) {
    this._operationList = [];
    this._accountList = [];
    this._userList = [];
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this._userList = data;
    })
  }


  onSelectedUser(value: string){
    const userId = value.substring(0,value.indexOf("-"))
    this.accountService.findByUserId(Number(userId)).subscribe(data => {
      this._accountList = data;
      this.accountSelected = false;
    },
      error => console.log(error)
    )
  }

  onSelectedAccount(value: string){
    const accountid = value.substring(0,value.indexOf("-"))
    this.operationService.getAllOperationByAccountId(Number(accountid)).subscribe(data => {
      this._operationList = data;
    })
  }


}
