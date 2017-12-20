var mongoose = require('mongoose');
//var Appointment = mongoose.model('Appointment');

var path = require('path');

module.exports = {
    // getAllAppointments: (req, res) => {
    //     console.log("getAllAppointments");
    //     Appointment.find({}).then(function (appts){
    //         console.log("Found appointments: ", appts);
    //         res.json(appts);
    //     }).catch(function(err){
    //         console.log("Error while getting appointments: ",err);
    //         res.json(err);
    //     });
    // },
    // createAppointment: (req, res) => {
    //     Appointment.create(req.body).then(newAppt => {
    //         console.log("New appointment: ", newAppt);
    //         res.json(newAppt);
    //     }).catch(err=>{
    //         console.log("Error while creating new appt ",err);
    //         res.json(err);
    //     });
    // },
    // deleteAppointment: (req, res) => {
    //     var id = req.params.id;
    //     console.log("deleting appointment: ", id);
    //     Appointment.remove({_id: id}, function(err, any){
    //         if (err) {
    //             res.json({status:'Error while removing appointment'});
    //         } else {
    //             console.log("deleted appointment");
    //             res.json({status: 'Success'});
    //         }
    //     });
    // }

}