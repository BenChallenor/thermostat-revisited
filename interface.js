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

});
