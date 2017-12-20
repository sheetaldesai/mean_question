var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

var path = require('path');

module.exports = {
    getAllQuestions: (req, res) => {
        console.log("getAllQuestions");
        Question.find({}).then(function (questions){
            //console.log("Found questions: ", questions);
            res.json(questions);
        }).catch(function(err){
            console.log("Error while getting questions: ",err);
            res.json(err);
        });
    },
    createQuestion: (req, res) => {
        Question.create(req.body).then(newQuestion => {
            console.log("Created new question: ",newQuestion);
            res.json(newQuestion);
        }).catch(err => {
            console.log("Error while creating new question: ",err);
            res.json(err);
        });            
    },
    getQuestion(req, res) {
        var id = req.params.id;
        console.log("Getting question: ", id);
        Question.findOne({_id:id}).populate('_answers'). // populate the comments
        exec(function(err, question){                    // execute the query
          console.log(question);
          res.json(question);
          if (err) {
              console.log("Error finding question: ", err);
          }
       });
    },
    addAnswer(req, res) {
        //first we define specifcly out post data and pass it to a new_comment
        console.log("Adding answer: body: ", req.body);
        console.log("id: ", req.params.id);

        var ans = new Answer(req.body);
  
        // first we find the post we want to attach the comment to
        Question.findOne({_id: req.params.id}, function(err, ques){
          
          // always check for errors
          if(err){
            console.log(err);
          }else{
            // provided there is no error, push the new_comment into the post
            ques._answers.push(ans);
  
            // save the updated post
            ques.save(function(err, savedQ){
  
              // always check for errors
              if(err){
                console.log(err);
              }else{
                console.log("saved question: ", savedQ);
                ans._question = savedQ._id;
                // provided the post saved and there was no error
                ans.save(function(err, savedAns){
  
                  // always check for errors
                  if(err){
                    console.log(err);
                  }else{
                    // success! let's redirect
                    console.log("Saved Ans: ", savedAns);
                    res.json(savedAns);
                  }
                })
              }
            })
          }
  
        })
    },
    updateAnswer(req, res) {
        var id = req.params.id;
        console.log("UpdateAnswer: ", id, req.body);
        Answer.findOne({_id:id}).then(ans => {
            ans.likes = req.body.likes;
            ans.save().then(savedAns => {
                console.log("Updated ans: ", savedAns);
                res.json(savedAns);
            }).catch(err => {
                console.log("Error updating answer ", err);
                res.json(err);
            });
        }).catch(err => {
            console.log("Error finding answer");
            res.json(err);
        })
    } 

}