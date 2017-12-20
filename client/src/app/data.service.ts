import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  questionObservable = new BehaviorSubject([]);
  private login = {username:""};

  constructor(private _http : HttpClient) { }

  setLogin(name:string){
    this.login.username = name;
  }

  getLogin():string {
    return this.login.username;
  }

  getAllQuestions() {
    this._http.get('/questions').subscribe(
      (questions: any[])=>{
        console.log("Got questions from server: ",questions);
        this.questionObservable.next(questions)
      }),
      error => console.log(error);
  }

  create(que) {
    console.log("Service adding question to the serer: ",que);
    this._http.post('/questions', que).subscribe(
      response => this.getAllQuestions(),
      errorResponse => console.log(errorResponse)
    );
  }

  delete(que){
    console.log("Service deleting question ", que);
    this._http.delete('/questions/'+que._id).subscribe(response => {
      console.log(response);
      this.getAllQuestions();
    });
  }

  getQuestion(id, callback){
    console.log("Service getting question id: ",id);
    this._http.get('questions/'+id).subscribe(response => {
      console.log("Got question from server : ", response);
      callback(response);
      //this.qObservable.next(response);
    }), error => console.log(error);
  }

  updateAnswer(id,likes){
    console.log("Service sending updateAnswer id, likes: ", id, likes);
    this._http.put('answers/'+id, {likes:likes}).subscribe(response => {
      console.log("Updated answer: ", response);
    })
  }

  addAnswer(id, answer) {
    
    console.log("Service adding answer id, answer: ", id, answer);
    this._http.post('questions/'+id+'/new-answer', answer).subscribe(response => {
      console.log("Added answer: ", response);
    });
  }

}
