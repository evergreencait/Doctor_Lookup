

var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorFirst, doctorLast, doctorTitle) {
  $('.findDoctor').text("The best doctor for " + medicalIssue + " is " + doctorFirst + " " + doctorLast + ": " + "" + doctorTitle);
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctorLookup').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
