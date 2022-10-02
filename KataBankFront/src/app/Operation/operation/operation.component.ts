import { Component, OnInit } from '@angular/core';
import {OperationServiceService} from "../../Services/operation/operation-service.service";
import {AccountServiceService} from "../../Services/account/account-service.service";
import {UserServiceService} from "../../Services/user/user-service.service";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  _operationList : any  ;
  _accountList : any;
  _userList : any;
  accountSelected = true;
  selectedDevice: any;

  constructor(private operationService:OperationServiceService,
              private  accountService : AccountServiceService,
              private  userService : UserServiceService) { }

  ngOnInit(): void {
    this.operationService.getAllOperation().subscribe(data => {
      this._operationList = data;
    })
    this.userService.getAllUser().subscribe(data => {
      this._userList = data;
    })
  }


  onSelectedUser(value: string){
    const accountid = value.substring(0,value.indexOf("-"))
    this.accountService.findByUserId(Number(accountid)).subscribe(data => {
      this._accountList = data;
      this.accountSelected = false;
    },
      error => console.log(error)
    )
  }


}
