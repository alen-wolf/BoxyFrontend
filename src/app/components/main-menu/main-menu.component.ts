import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router,private localService: LocalService) { }

  ngOnInit(): void {
  }

  routeStandard() {
    this.localService.mode=true;
    this.router.navigate(['mode']);
  }

  routeBoxin() {
    this.localService.mode=false;
    this.router.navigate(['mode']);
  }

  routeScoreboard() {
    this.router.navigate(['score']);
  }
}
