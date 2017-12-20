var controller = require('../controllers/controller.js');
const path = require('path');

module.exports = function(app) {
    // app.get('/appts', controller.getAllAppointments);
    // app.post('/appts', controller.createAppointment);
    // app.delete('/appts/:id', controller.deleteAppointment);
    // app.get('/questions/:id', survey.getQuestion);
    // app.put('/comments/:id', survey.updateOption);
  
    app.all("*", (req,res, next) => {
        console.log("sending index file");
        res.sendFile(path.resolve('../client/dist/index.html'));
    });
}