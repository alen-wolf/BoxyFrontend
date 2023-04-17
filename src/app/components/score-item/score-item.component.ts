import { Component, OnInit } from '@angular/core';
import {DbBackService} from "../../services/db-back.service";

@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.css']
})
export class ScoreItemComponent implements OnInit {

  constructor(private  service:DbBackService) { }

  ScoreList:any=[];

  ngOnInit(): void {
    this.refreshScoreList();
  }

  refreshScoreList(){
    this.service.getScoreList().subscribe(data=>{
      this.ScoreList=data;
    });
  }

}
