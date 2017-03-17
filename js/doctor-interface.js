var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorData) {
  $('.findDoctor').text("The doctor for " + medicalIssue + " is " + doctorData);
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctorLookup').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
