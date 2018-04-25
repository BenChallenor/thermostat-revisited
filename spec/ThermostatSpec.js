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

});
