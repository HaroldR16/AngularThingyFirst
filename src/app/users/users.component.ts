import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder
    ) { }
    
    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
        fullName: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
        email: new FormControl('',[Validators.required, Validators.minLength(5), Validators.email]),
        phone: new FormControl('',[Validators.pattern("###-###-###")])
      });
  }

  get getControl(){
    return this.userForm.controls;
  }
}
