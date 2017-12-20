import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  question = {};
  id = {id:""};

  answer = {
    text: "",
    likes: 0,
    details: "",
    username: ""
  }
  constructor(private _route : ActivatedRoute, private _router : Router, private _dataService : DataService) { }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      //console.log("params: ", params);
      this.id.id = params.get('id');
      console.log("id:", this.id.id);
      if (this.id.id) {
        this._dataService.getQuestion(this.id.id, (question) => {
          this.question= question;
          console.log(this.question['question']);        
        });
      } else {
        console.log("Id not found");
      }
    });
  }

  onSubmit(){
    this.answer.username = this._dataService.getLogin();
    this._dataService.addAnswer(this.id.id, this.answer);
    this._router.navigate(['/dashboard']);
  }

  onCancel() {
    this._router.navigate(['/dashboard']);
  }

  

}
