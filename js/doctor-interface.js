var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorFirst, doctorLast, doctorTitle) {
  $('.findDoctor').append("<li>" + doctorFirst + " " + doctorLast);
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctorLookup').click(function() {
    $( ".findDoctor" ).empty();
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
