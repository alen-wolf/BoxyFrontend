import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public mode:boolean = true;
  public dbaccess: boolean = false;
  public p1name:string="";
  public p2name:string="";
  public winner:string="";

  //Questions
  quest:any=[];



  constructor() { }


}
