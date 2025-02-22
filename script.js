// Function to convert temperatures
function convertTemperature() {
    let temp = parseFloat(document.getElementById("temp").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let convertedTemp;

    if (isNaN(temp)) {
        alert("Please enter a valid number");
        return;
    }

    if (fromUnit === toUnit) {
        convertedTemp = temp;
    } else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemp = (temp * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemp = temp + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemp = (temp - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemp = ((temp - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemp = temp - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemp = ((temp - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById("convertedTemp").textContent = convertedTemp.toFixed(2) + " " + getUnitSymbol(toUnit);
}

// Function to get the unit symbol for the result
function getUnitSymbol(unit) {
    if (unit === "celsius") return "°C";
    if (unit === "fahrenheit") return "°F";
    if (unit === "kelvin") return "K";
}

