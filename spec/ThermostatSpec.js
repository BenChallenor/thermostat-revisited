describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperarture by 1", function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature by 1", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should have a min temperature of 10", function() {
    thermostat.temperature = 10;
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(10);
  });


  describe("power saving mode", function() {
    it("has power saving mode on by default", function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("can be turned off", function() {
      thermostat.turnPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it("can be turned on", function() {
      thermostat.turnPowerSavingModeOff();
      thermostat.turnPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("max temperature is 25 when PSM is on", function() {
      thermostat.temperature = 25;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(25);
    });

    it("max temperature is 32 when PSM is off", function() {
      thermostat.turnPowerSavingModeOff();
      thermostat.temperature = 32;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(32);
    })
  });

  describe("Reset", function() {
    it("sets the temperature to 20", function() {
      thermostat.temperature = 30;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("energy usage", function() {
    it("is low-usage when temperature is less than 18", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it("is medium-usage when temperature is between 18 - 25", function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it("is high-usage when temperature is above 25", function() {
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });



});
