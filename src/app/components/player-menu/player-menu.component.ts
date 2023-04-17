import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalService} from "../../services/local.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-player-menu',
  templateUrl: './player-menu.component.html',
  styleUrls: ['./player-menu.component.css']
})
export class PlayerMenuComponent implements OnInit {

  nameForm: FormGroup
  constructor(private router:Router, private localService:LocalService,private formBuilder:FormBuilder) {
    this.nameForm=this.formBuilder.group({
      fname: formBuilder.control('',[Validators.required,Validators.maxLength(9)]),
      sname: formBuilder.control('',[Validators.required,Validators.maxLength(9)])
    })
  }

  ngOnInit(): void {
  }

  asUser() {
    if(this.nameForm.value.fname.match(/^ *$/)==null && this.nameForm.value.sname.match(/^ *$/)==null){
      this.localService.p1name=this.nameForm.value.fname;
      this.localService.p2name=this.nameForm.value.sname;
      this.localService.dbaccess=true;
      if(this.localService.mode)
        this.router.navigate(['tictacktoe']);
      else
        this.router.navigate(['question']);
    }
  }

  asGuest() {
    this.localService.dbaccess=false;
    if(this.localService.mode)
      this.router.navigate(['tictacktoe']);
    else
      this.router.navigate(['question']);
  }

  getFName(name:string){ return this.nameForm.get(name)}
  getSName(name:string){ return this.nameForm.get(name)}

}
