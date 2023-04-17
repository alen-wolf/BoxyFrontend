import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Router} from "@angular/router";
import {getMatIconFailedToSanitizeLiteralError} from "@angular/material/icon";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  winner: any=this.localService.winner;

  gameover:Boolean=false;

  constructor(private localService:LocalService,private router:Router,public dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  newGame() {
    this.gameover=true;
    this.dialogRef.close({event:this.gameover});
  }

  menu() {
    this.gameover=false;
    this.router.navigate(['menu']);
  }
}
