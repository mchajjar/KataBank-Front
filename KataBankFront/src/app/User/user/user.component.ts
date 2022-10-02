import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../Services/user/user-service.service";
import {FormBuilder, FormGroup, Validator, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;
  user : User  ;
  _userList : any  ;
  constructor(private  userService : UserServiceService,
  public fb: FormBuilder) {
      this.form = this.fb.group({
        CIN: [this.user.cin,Validators.max(8),Validators.pattern('^[0-9][0-9]*')],
        name: [this.user.name],
        surname: [this.user.surname],
        dateOfBirth: [this.user.dateOfBirth],
        creationDate: [this.user.creationDate],
        jobTitle: [this.user.jobTitle],
      });


  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this._userList = data;
    })
  }

  addUser() :void{
    this.userService.putUser(this.user).subscribe(data =>{
      console.log(data);
    },
      error => console.log(error)
    )
  }

}
