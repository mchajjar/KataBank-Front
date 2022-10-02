import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../Services/user/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _userList : any  ;
  constructor(private  userService : UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this._userList = data;
    })
  }

}
