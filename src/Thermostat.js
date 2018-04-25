function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.increase = function() {
  if (this.powerSavingMode && this.temperature === 25) {
    return;
  } else if (this.powerSavingMode === false && this.temperature === 32) {
    return;
  }
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
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
