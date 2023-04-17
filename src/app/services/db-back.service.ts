import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbBackService {
  readonly APIUrl="https://localhost:5001/";

  constructor(private http:HttpClient) { }

  getScoreList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/Scoreboard');
  }

  addScoreList(val:any){
    return this.http.post(this.APIUrl+'api/Scoreboard',val);
  }

  updateScoreList(val:string){
    return this.http.put(this.APIUrl+'api/Scoreboard/'+val,{});
  }

  getQuestionList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/Questions');
  }

  addQuestionList(val:any){
    return this.http.post(this.APIUrl+'api/Questions',val);
  }

  getSpecificQuestion(val:number){
    return this.http.get(this.APIUrl+'api/Questions/GetSpecificQuestion/'+val);
  }


}
