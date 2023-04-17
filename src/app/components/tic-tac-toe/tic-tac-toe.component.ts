import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {DbBackService} from "../../services/db-back.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  gameField: Array<string>=["","","","","","","","",""];
  player1: Array<number>=[];
  player2: Array<number>=[];
  turn:boolean=true;
  gurn: string="X";
  cell1;cell2;cell3;cell4;cell5;cell6;cell7;cell8;cell9: string;
  Players:any=[];

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

  cellClick0() {
    if(this.turn && this.gameField[0]==""){
      this.gameField[0]='X';
      this.cell1='cell1X';
      this.playerTurn(0);
      this.winner();
    }
    else if(!this.turn && this.gameField[0]==""){
      this.gameField[0]='O';
      this.cell1='cell1O';
      this.playerTurn(0);
      this.winner();
    }
  }

  cellClick1() {
    if(this.turn && this.gameField[1]==""){
      this.gameField[1]='X';
      this.cell2='cell2X';
      this.playerTurn(1);
      this.winner();
    }
    else if(!this.turn && this.gameField[1]==""){
      this.gameField[1]='O';
      this.cell2='cell2O';
      this.playerTurn(1);
      this.winner();
    }
  }

  cellClick2() {
    if(this.turn && this.gameField[2]==""){
      this.gameField[2]='X';
      this.cell3='cell3X';
      this.playerTurn(2);
      this.winner();
    }
    else if(!this.turn && this.gameField[2]==""){
      this.gameField[2]='O';
      this.cell3='cell3O';
      this.playerTurn(2);
      this.winner();
    }
  }

  cellClick3() {
    if(this.turn && this.gameField[3]==""){
      this.gameField[3]='X';
      this.cell4='cell4X';
      this.playerTurn(3);
      this.winner();
    }
    else if(!this.turn && this.gameField[3]==""){
      this.gameField[3]='O';
      this.cell4='cell4O';
      this.playerTurn(3);
      this.winner();
    }
  }

  cellClick4() {
    if(this.turn && this.gameField[4]==""){
      this.gameField[4]='X';
      this.cell5='cell5X';
      this.playerTurn(4);
      this.winner();
    }
    else if(!this.turn && this.gameField[4]==""){
      this.gameField[4]='O';
      this.cell5='cell5O';
      this.playerTurn(4);
      this.winner();
    }
  }

  cellClick5() {
    if(this.turn && this.gameField[5]==""){
      this.gameField[5]='X';
      this.cell6='cell6X';
      this.playerTurn(5);
      this.winner();
    }
    else if(!this.turn && this.gameField[5]==""){
      this.gameField[5]='O';
      this.cell6='cell6O';
      this.playerTurn(5);
      this.winner();
    }
  }

  cellClick6() {
    if(this.turn && this.gameField[6]==""){
      this.gameField[6]='X';
      this.cell7='cell7X';
      this.playerTurn(6);
      this.winner();
    }
    else if(!this.turn && this.gameField[6]==""){
      this.gameField[6]='O';
      this.cell7='cell7O';
      this.playerTurn(6);
      this.winner();
    }
  }

  cellClick7() {
    if(this.turn && this.gameField[7]==""){
      this.gameField[7]='X';
      this.cell8='cell8X';
      this.playerTurn(7);
      this.winner();
    }
    else if(!this.turn && this.gameField[7]==""){
      this.gameField[7]='O';
      this.cell8='cell8O';
      this.playerTurn(7);
      this.winner();
    }
  }

  cellClick8() {
    if(this.turn && this.gameField[8]==""){
      this.gameField[8]='X';
      this.cell9='cell9X';
      this.playerTurn(8);
      this.winner();
    }
    else if(!this.turn && this.gameField[8]==""){
      this.gameField[8]='O';
      this.cell9='cell9O';
      this.playerTurn(8);
      this.winner();
    }
  }



}
