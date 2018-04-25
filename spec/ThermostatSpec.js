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
  });



});
