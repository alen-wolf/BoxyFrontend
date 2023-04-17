import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogQuestionComponent} from "../dialog-question/dialog-question.component";
import {Router} from "@angular/router";
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-question-mode',
  templateUrl: './question-mode.component.html',
  styleUrls: ['./question-mode.component.css']
})
export class QuestionModeComponent implements OnInit {
  gameField: Array<string>=["!","!","!","!","!","!","!","!","!"];
  clicked:boolean=true;
  cell1;cell2;cell3;cell4;cell5;cell6;cell7;cell8;cell9: string;

  constructor(private dialog:MatDialog,private router:Router,private localService:LocalService) {
    this.cell1='cell1X';
    this.cell2='cell2X';
    this.cell3='cell3X';
    this.cell4='cell4X';
    this.cell5='cell5X';
    this.cell6='cell6X';
    this.cell7='cell7X';
    this.cell8='cell8X';
    this.cell9='cell9X';
  }

  ngOnInit(): void {
  }

  popup(){
    this.status();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.panelClass="dialog";
    this.dialog.open(DialogQuestionComponent,dialogConfig);
  }

  status() {
    let br = 0;
    for (let i of this.gameField){
      if (i != '?')
        break;
      else
        br++;
    }
    if(br==this.gameField.length)
        this.clicked=false;
  }

  startGame(){
    this.router.navigate(['boxin']);
  }

  cellClick0() {
    if(this.gameField[0]=="!"){
      this.gameField[0]='?';
      this.cell1='cell1O';
      this.popup();
    }
  }

  cellClick1() {
    if(this.gameField[1]=="!"){
      this.gameField[1]='?';
      this.cell2='cell2O';
      this.popup();
    }
  }

  cellClick2() {
    if(this.gameField[2]=="!"){
      this.gameField[2]='?';
      this.cell3='cell3O';
      this.popup();
    }
  }

  cellClick3() {
    if(this.gameField[3]=="!"){
      this.gameField[3]='?';
      this.cell4='cell4O';
      this.popup();
    }
  }

  cellClick4() {
    if(this.gameField[4]=="!"){
      this.gameField[4]='?';
      this.cell5='cell5O';
      this.popup();
    }
  }

  cellClick5() {
    if(this.gameField[5]=="!"){
      this.gameField[5]='?';
      this.cell6='cell6O';
      this.popup();
    }
  }

  cellClick6() {
    if(this.gameField[6]=="!"){
      this.gameField[6]='?';
      this.cell7='cell7O';
      this.popup();
    }
  }

  cellClick7() {
    if(this.gameField[7]=="!"){
      this.gameField[7]='?';
      this.cell8='cell8O';
      this.popup();
    }
  }

  cellClick8() {
    if(this.gameField[8]=="!"){
      this.gameField[8]='?';
      this.cell9='cell9O';
      this.popup();
    }
  }



}
