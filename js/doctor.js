var apiKey = require('./../.env').apiKey;

function Doctor(){
}


Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    $('.findDoctor').text("The best doctor for " + medicalIssue + " is " + response.data.profile.);
    console.log("this works " + response)
  }).fail(function(error) {
    $('.findDoctor').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;
