import { Component, OnInit,Inject } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-answer',
  templateUrl: './dialog-answer.component.html',
  styleUrls: ['./dialog-answer.component.css']
})
export class DialogAnswerComponent implements OnInit {

  answers:any;
  list:any=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private localService:LocalService,public dialogRef:MatDialogRef<DialogAnswerComponent>) {
    this.answers=(this.localService.quest[this.data.id]);
    this.list.push(this.answers.CorrectAnswer);
    this.list.push(this.answers.WrongAnswerOne);
    this.list.push(this.answers.WrongAnswerTwo);
  }

  ngOnInit(): void {
    this.list=this.shuffle(this.list);

  }

  shuffle(array:any=[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  close1() {
    if(this.list[0].toString()==this.answers.CorrectAnswer.toString()){
      this.dialogRef.close({event:true});
    }
    else {
      this.dialogRef.close({event:false});
    }
  }

  close2() {
    if(this.list[1].toString()==this.answers.CorrectAnswer.toString()){
      this.dialogRef.close({event:true});
    }
    else {
      this.dialogRef.close({event:false});
    }
  }

  close3() {
    if(this.list[2].toString()==this.answers.CorrectAnswer.toString()){
      this.dialogRef.close({event:true});
    }
    else {
      this.dialogRef.close({event:false});
    }
  }
}
