import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {DbBackService} from "../../services/db-back.service";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogAnswerComponent} from "../dialog-answer/dialog-answer.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-boxin-oxin',
  templateUrl: './boxin-oxin.component.html',
  styleUrls: ['./boxin-oxin.component.css']
})
export class BoxinOxinComponent implements OnInit {
  gameField: Array<string>=["","","","","","","","",""];
  player1: Array<number>=[];
  player2: Array<number>=[];
  turn:boolean=true;
  gurn: string="X";
  cell1;cell2;cell3;cell4;cell5;cell6;cell7;cell8;cell9: string;
  Players:any=[];
  correct:any;

  constructor(private localService:LocalService,private service:DbBackService,private dialog:MatDialog) {
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

  winner(){
    const win: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let winner: boolean = false;
    let won: string = 'DRAW';
    let br: number = 0;

    for(let i=0; i<win.length; i++ ){
      br=0;
      for(let j=0; j<3; j++){
        if(!this.player1.includes(win[i][j])){
          break;
        }else
          br++;
      }
      if(br==3){
        winner=true;
        won='X';
        break;
      }
    }
    for(let i=0; i<win.length; i++ ){
      br=0;
      for(let j=0; j<3; j++){
        if(!this.player2.includes(win[i][j])){
          break;
        }else
          br++;
      }
      if(br==3){
        winner=true;
        won='O';
        break;
      }
    }

    if(winner && won!='DRAW'){
      this.finish(won);
    }
    else if(!this.gameField.includes('') && !winner) {
      this.finish(won);
    }

  }

  finish(player:string){
    if(this.localService.dbaccess && player!='DRAW'){
      if(player == 'X'){
        player=this.localService.p1name;
      }
      else if(player == 'O'){
        player=this.localService.p2name;
      }

      this.service.getScoreList().subscribe(data=>{
        this.Players=data;

        let match:boolean=false;
        for(let j=0; j<this.Players.length; j++){
          if(this.Players[j].PlayerName==player){
            this.update(player);
            match=true;
            break;
          }
        }
        if(!match){
          this.post(player);
        }
      });

    }else {
      this.popUp(player);

    }
  }

  update(player:string){
    this.service.updateScoreList(player).subscribe();
    this.popUp(player);
  }

  post(player:string){
    let val = {
      "id":0,
      "PlayerName":player,
      "Wins":1
    };
    this.service.addScoreList(val).subscribe();
    this.popUp(player);
  }

  popUp(winner:string){
    this.localService.winner=winner;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    dialogConfig.panelClass="dialog";
    const dialogRef= this.dialog.open(DialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result =>{
      if(result.event == true){
        this.newGame();
      }
    });
  }

  newGame() {
    this.gameField =["","","","","","","","",""];
    this.player1=[];
    this.player2=[];
    this.turn=true;
    this.gurn="X";
    this.Players=[];
  }

  playerTurn(t:number){
    if(this.turn){
      this.gurn="O";
      this.player1.push(t);
      this.turn=false;
    }
    else{
      this.gurn="X";
      this.player2.push(t);
      this.turn=true;
    }
  }

  skip(){
    if(this.turn){
      this.gurn="O";
      this.turn=false;
    }
    else {
      this.gurn="X";
      this.turn=true;
    }
  }

  questLog(spot:number){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.panelClass="dialog";
    dialogConfig.data = {
      id: spot
    };
    const dialogRef = this.dialog.open(DialogAnswerComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result =>{
      this.correct=result.event;
      console.log(this.correct)

      if(this.turn){
        if(this.correct){
          this.gameField[spot]='X';
          if(spot==0)
            this.cell1='cell1X';
          else if (spot==1)
            this.cell2='cell2X';
          else if(spot==2)
            this.cell3='cell3X';
          else if(spot==3)
            this.cell4='cell4X';
          else if(spot==4)
            this.cell5='cell5X';
          else if(spot==5)
            this.cell6='cell6X';
          else if(spot==6)
            this.cell7='cell7X';
          else if(spot==7)
            this.cell8='cell8X';
          else if(spot==8)
            this.cell9='cell9X';

          this.playerTurn(spot);
          this.winner();
        }
        else
          this.skip();
      }
      else if(!this.turn){
        if(this.correct) {
          this.gameField[spot] = 'O';
          if(spot==0)
            this.cell1 = 'cell1O';
          else if(spot==1)
            this.cell2 = 'cell2O';
          else if(spot==2)
            this.cell3 = 'cell3O';
          else if(spot==3)
            this.cell4 = 'cell4O';
          else if(spot==4)
            this.cell5 = 'cell5O';
          else if(spot==5)
            this.cell6 = 'cell6O';
          else if(spot==6)
            this.cell7 = 'cell7O';
          else if(spot==7)
            this.cell8 = 'cell8O';
          else if(spot==8)
            this.cell9 = 'cell9O';

          this.playerTurn(spot);
          this.winner();
        }
        else
          this.skip();
      }
    });
  }

  cellClick0() {
    if(this.gameField[0]=="")
      this.questLog(0);
  }

  cellClick1() {
    if(this.gameField[1]=="")
      this.questLog(1);
  }

  cellClick2() {
    if(this.gameField[2]=="")
      this.questLog(2);
  }

  cellClick3() {
    if(this.gameField[3]=="")
      this.questLog(3);
  }

  cellClick4() {
    if(this.gameField[4]=="")
      this.questLog(4);
  }

  cellClick5() {
    if(this.gameField[5]=="")
      this.questLog(5);
  }

  cellClick6() {
    if(this.gameField[6]=="")
      this.questLog(6);
  }

  cellClick7() {
    if(this.gameField[7]=="")
      this.questLog(7);
  }

  cellClick8() {
    if(this.gameField[8]=="")
      this.questLog(8);
  }

}
