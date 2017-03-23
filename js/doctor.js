
var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    for (var i = 0; i <= response.data.length; i++) {

      displayDoctor(medicalIssue, response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.title);
      console.log(response.data[i]);
    }
  }).fail(function(error) {
    $('.findDoctor').text(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;

// Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
//     for(var i = 0; i < response.length; ii) {
//
//       displayDoctor(medicalIssue, response.data[0].profile.first_name, response.data[0].profile.last_name, response.data[0].profile.title);
//       console.log(response.data[0].profile.first_name);
//     }).fail(function(error) {
//       $('.findDoctor').text(error.responseJSON.message);
//     });
//   }
// }
//
// exports.doctorModule = Doctor;
