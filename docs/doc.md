How to Use This Postman Collection
Import the Collection:

Open Postman

Click "Import" in the top-left corner

Paste the JSON above or upload the file

Click "Import"

Set Up Environment:

The collection uses a baseUrl variable (default: http://localhost:8080)

You can change this in the collection variables or create a Postman environment

Running Tests:

Execute the requests in order to simulate a complete charging cycle

The expected responses are included in each request

Test Scenarios Covered
Happy Path:

Power On → Ready to Charge → Vehicle Connected → Start Charging → Stop Charging → Vehicle Disconnected → Power Off

Failure Scenario:

Tests the transition to TROUBLE state when a failure occurs

Individual State Transitions:

Each possible event is tested with its expected state transition

Additional Testing Tips
Automated Testing:

You can add Postman tests to each request to automatically verify responses

Example test script (add to Tests tab in Postman):

javascript

Copy

Download



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
Newman for CI/CD:

You can run these tests in your CI/CD pipeline using Newman (Postman's CLI tool)

Example command:

text

Copy

Download



newman run CarCharger_API_Tests.postman_collection.json
This Postman collection provides comprehensive system testing for your CarCharger web service, covering all states and transitions specified in your requirements.