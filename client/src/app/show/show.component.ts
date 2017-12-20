import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  question = {};
  answers = [];
  
  constructor(private _route : ActivatedRoute, private _router : Router, private _dataService : DataService) { 
    this._route.paramMap.subscribe( params => {
      //console.log("params: ", params);
      var id = params.get('id');
      console.log("id:", id);
      if (id) {
        this._dataService.getQuestion(id, (question) => {
          this.question= question;
          console.log(this.question['question']);
          this.answers = this.question['_answers'];
          console.log("Answers: ", this.answers)
        });
      } else {
        console.log("Id not found");
      }
    });
  }

  ngOnInit() {
    
  }

  onLike(answer){
    answer['likes'] += 1;
    console.log("Like clicked for ", answer);
    this._dataService.updateAnswer(answer._id, answer.likes);
  }
}
