function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
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
