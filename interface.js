$(document).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temperature-up').on('click', function() {
    thermostat.increase();
    updateTemperature()
  });

  $('#temperature-down').on('click', function() {
    thermostat.decrease();
    updateTemperature()
  });

  $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text("on");
    updateTemperature()
  });

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text("off");
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=646b7a7c86b59b834165494f58565c87';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

});
