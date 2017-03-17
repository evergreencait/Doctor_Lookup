var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  $('#doctorLookup').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    $('.findDoctor').text("The issue you have chosen is " + medicalIssue + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
