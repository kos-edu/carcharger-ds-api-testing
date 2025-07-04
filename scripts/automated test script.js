pm.test("Status code is 200", function() {
    pm.response.to.have.status(200);
});

pm.test("Response is valid", function() {
    const validStates = [
        "INITIAL_STATE", 
        "POWER_OFF", 
        "POWER_PRESENT", 
        "READY_TO_CHARGE", 
        "VEHICLE_CONNECTED", 
        "VEHICLE_CHARGING", 
        "TROUBLE"
    ];
    pm.expect(validStates).to.include(pm.response.text());
});