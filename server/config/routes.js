var controller = require('../controllers/controller.js');
const path = require('path');

module.exports = function(app) {
    app.get('/questions', controller.getAllQuestions);
    app.post('/questions', controller.createQuestion);
    // app.delete('/questions/:id', controller.deleteQuestion);
    app.get('/questions/:id', controller.getQuestion);
    app.post('/questions/:id/new-answer', controller.addAnswer);
    app.put('/answers/:id', controller.updateAnswer);
  
    app.all("*", (req,res, next) => {
        console.log("sending index file");
        res.sendFile(path.resolve('../client/dist/index.html'));
    });
}