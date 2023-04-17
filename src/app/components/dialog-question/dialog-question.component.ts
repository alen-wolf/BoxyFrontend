import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LocalService} from "../../services/local.service";
import {DbBackService} from "../../services/db-back.service";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent implements OnInit {

  questForm: FormGroup
  clicked:boolean=false;
  questionList: any=[];
  val:any=[];

  constructor(private localService:LocalService,private dbService:DbBackService,private formBuilder:FormBuilder,public dialogRef:MatDialogRef<DialogQuestionComponent>) {
    this.questForm=this.formBuilder.group({
      quest:formBuilder.control('',[Validators.required,Validators.minLength(1)]),
      cAnswer:formBuilder.control('',[Validators.required,Validators.minLength(1)]),
      wAnswer1:formBuilder.control('',[Validators.required,Validators.minLength(1)]),
      wAnswer2:formBuilder.control('',[Validators.required,Validators.minLength(1)])
    });
  }

  ngOnInit(): void {
    this.refreshQList();
  }


  setQuestion() {
    if(this.questForm.value.quest.match(/^ *$/)==null && this.questForm.value.cAnswer.match(/^ *$/)==null && this.questForm.value.wAnswer1.match(/^ *$/)==null && this.questForm.value.wAnswer2.match(/^ *$/)==null){
      let val ={
        "id":0,
        "Question": this.questForm.value.quest,
        "CorrectAnswer": this.questForm.value.cAnswer,
        "WrongAnswerOne": this.questForm.value.wAnswer1,
        "WrongAnswerTwo": this.questForm.value.wAnswer2
      }
      this.localService.quest.push(val);
      this.dialogRef.close();
    }
  }

  saveQuestion() {
    if(this.questForm.value.quest.match(/^ *$/)==null && this.questForm.value.cAnswer.match(/^ *$/)==null && this.questForm.value.wAnswer1.match(/^ *$/)==null && this.questForm.value.wAnswer2.match(/^ *$/)==null){
      let val ={
        "id":0,
        "Question": this.questForm.value.quest,
        "CorrectAnswer": this.questForm.value.cAnswer,
        "WrongAnswerOne": this.questForm.value.wAnswer1,
        "WrongAnswerTwo": this.questForm.value.wAnswer2
      }
      this.dbService.addQuestionList(val).subscribe();
    }
  }

  refreshQList(){
    this.questionList=[];
    this.dbService.getQuestionList().subscribe(data=>{
      this.questionList=data;
    });
  }

  onPickQuestion(value:number) {
    this.dbService.getSpecificQuestion(value).subscribe(data=>{
      this.val=data;
      this.localService.quest.push(this.val[0]);
    });
    this.dialogRef.close();
  }






  getCAnswer(cAnswer:string){ return this.questForm.get(cAnswer)}
}
