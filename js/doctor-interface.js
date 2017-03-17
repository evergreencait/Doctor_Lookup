var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctorLookup').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    var doctor = currentDoctorObject.getDoctor(medicalIssue);
    $('.findDoctor').text("The best doctor for " + medicalIssue + " is " + doctor);
    console.log(doctor);
  });
});
