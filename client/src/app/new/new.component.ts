import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  question = {
    username: "",
    question: "", 
    description: ""
  }
  
  constructor(private _dataService : DataService,
    private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    
    this.question.username = this._dataService.getLogin();
    if (this.question.username == "") {
      this.question.username = "sheetal"
    }
    console.log("save clicked question: ", this.question);
    this._dataService.create(this.question);
    this._router.navigate(['/dashboard']);
  }

  onCancel() {
    this._router.navigate(['/dashboard']);
  }
}
