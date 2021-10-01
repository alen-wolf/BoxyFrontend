import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavTitleComponent } from './components/nav-title/nav-title.component';
import {RouterModule, Routes} from "@angular/router";
import { ModeSelectComponent } from './components/mode-select/mode-select.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PlayerMenuComponent } from './components/player-menu/player-menu.component';
import { QuestionModeComponent } from './components/question-mode/question-mode.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { BoxinOxinComponent } from './components/boxin-oxin/boxin-oxin.component';
import { ScoreItemComponent } from './components/score-item/score-item.component';
import {DbBackService} from "./services/db-back.service";


import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogQuestionComponent } from './components/dialog-question/dialog-question.component';
import { DialogAnswerComponent } from './components/dialog-answer/dialog-answer.component';


const appRoutes: Routes = [
  {path: '',component:StartMenuComponent},
  {path:'menu',component:MainMenuComponent},
  {path:'mode',component:ModeSelectComponent},
  {path:'score',component:ScoreboardComponent},
  {path:'name',component:PlayerMenuComponent},
  {path:'question',component:QuestionModeComponent},
  {path:'tictacktoe',component:TicTacToeComponent},
  {path:'boxin',component:BoxinOxinComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    StartMenuComponent,
    MainMenuComponent,
    NavTitleComponent,
    ModeSelectComponent,
    ScoreboardComponent,
    PlayerMenuComponent,
    QuestionModeComponent,
    TicTacToeComponent,
    BoxinOxinComponent,
    ScoreItemComponent,
    DialogComponent,
    DialogQuestionComponent,
    DialogAnswerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true},),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [DbBackService],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,DialogQuestionComponent,DialogAnswerComponent]
})
export class AppModule { }
