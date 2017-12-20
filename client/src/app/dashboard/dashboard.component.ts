import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  questions = [];
  username
  
  constructor(private _dataService : DataService) { 
    this.username = this._dataService.getLogin();
  }

  ngOnInit() {
    console.log("Logged in user: ",this._dataService.getLogin());
    this._dataService.questionObservable.subscribe(questions=>this.questions = questions);
    this._dataService.getAllQuestions();
  }

}
