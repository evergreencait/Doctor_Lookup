var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

// $(document).ready(function() {
//   var currentDoctorObject = new Doctor();
//   currentDoctorObject.getDoctor();
//   $('#doctorLookup').click(function() {
//     var city = $('#issue').val();
//     $('#issue').val("");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//       $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//     }).fail(function(error) {
//       $('.showWeather').text(error.responseJSON.message);
//     });
//   });
// });
