// Get the battery API
    // Get the battery API
    navigator.getBattery().then(function(battery) {
        battery.addEventListener('chargingchange', function(){
        console.log( 'New charging state: ', battery.charging );
        });
        battery.addEventListener('levelchange', function(){
        console.log( 'New battery level: ', battery.level * 100 + "%" );
        });
        battery.addEventListener('chargingtimechange', function(){
        console.log( 'New time left until full: ', battery.chargingTime /60, " seconds" );
        });
        battery.addEventListener('dischargingtimechange', function(){
        console.log( 'New time left until empty: ', battery.dischargingTime /60 , " minutes" );
        });
        });

// Section 1. Getting current battery level
// Get the battery API
        navigator.getBattery().then(function(battery) {
        // Battery level is between 0 and 1, so i multiply it by 100 to get percentage
        document.getElementById("BatteryLevel").innerText = "Battery level: " + battery.level * 100 + "%"
        });

// Section 2. Is battery charging?
        // Get the battery API
        navigator.getBattery().then(function(battery) {
        if (battery.charging) {
                document.getElementById("BatteryChargingState").innerText ="Battery is charging " + battery.level * 100 + "%"
        } else {
                document.getElementById("BatteryDischargingState").innerText ="Battery is discharging Remains " + battery.level * 100 + "%"
        }
        });

// Section 3. Get time left until battery is empty
        // Get the battery API
        navigator.getBattery().then(function(battery) {
                if (battery.charging)   {
                        document.getElementById("BatteryDischargingState").innerText = "The Device is Plug in and Charging"
                }
                else{ 
                        document.getElementById("BatteryDischargingState").innerText ="Battery is Discharging Remains " + battery.level * 100 + "% " + "Battery will drain in... " , battery.dischargingTime / 60 , + " minutes"

                }
        });
        
// Section 4. Get time left until battery is fully charged
        // Get the battery API
        navigator.getBattery().then(function(battery) {
                if (battery.charging){
                        document.getElementById("ChargingTimeRemaining").innerText ="Battery will get fully charged in... ", battery.chargingTime, " seconds"
                }
        });
        