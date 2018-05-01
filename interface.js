$(document).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

  $('#temperature-up').on('click', function() {
    thermostat.increase();
    updateTemperature()
  });

  $('#temperature-down').on('click', function() {
    thermostat.decrease();
    updateTemperature()
  });

});
