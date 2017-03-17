var apiKey = require('./../.env').apiKey;

function Doctor(){
  this.doctorList = [];
}


Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
  var doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    displayDoctor(medicalIssue, response.data.profile.first_name);
    console.log(response.data.profile);
  }).fail(function(error) {
    $('.findDoctor').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
