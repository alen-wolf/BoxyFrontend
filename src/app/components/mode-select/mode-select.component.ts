import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mode-select',
  templateUrl: './mode-select.component.html',
  styleUrls: ['./mode-select.component.css']
})
export class ModeSelectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routePvP() {
    this.router.navigate(['name']);
  }

  routePvE() {

  }

}
