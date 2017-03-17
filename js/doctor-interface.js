var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  $('#doctorLookup').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      $('.findDoctor').text("The doctors for " + medicalIssue + " are " + result.main.profile);
    }).fail(function(error) {
      $('.findDoctor').text(error.responseJSON.message);
    });
  });
});
