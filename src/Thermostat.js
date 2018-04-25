function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingModeOn = true;
};

Thermostat.prototype.increase = function() {
  this.temperature++;
};

Thermostat.prototype.decrease = function() {
  if (this.isMinTemp()) {
    return;
  };
  this.temperature--;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true;
};
