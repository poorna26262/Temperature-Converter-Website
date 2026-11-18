const temperatureInput = document.getElementById("temperature");

const unitSelect = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const resultSection = document.getElementById("resultSection");

const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");



convertBtn.addEventListener("click", function () {

    // Get input value
    const inputValue = temperatureInput.value.trim();

    const temperature = Number(inputValue);

    const selectedUnit = unitSelect.value;


  
    errorMessage.textContent = "";

    resultSection.style.display = "none";


  
    if (inputValue === "") {

        showError("Please enter a temperature value.");

        return;

    }

    if (!Number.isFinite(temperature)) {

        showError("Please enter a valid numeric value.");

        return;

    }


    let celsius;


    if (selectedUnit === "celsius") {

        celsius = temperature;

    }

    else if (selectedUnit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    }

    else if (selectedUnit === "kelvin") {

        celsius = temperature - 273.15;

    }

    if (celsius < 0 && celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        return;

    }


    const fahrenheit = (celsius * 9 / 5) + 32;

    const kelvin = celsius + 273.15;


    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";


    resultSection.style.display = "block";

});


function showError(message) {

    errorMessage.textContent = message;

}


temperatureInput.addEventListener("input", function () {

    errorMessage.textContent = "";

    resultSection.style.display = "none";

});


unitSelect.addEventListener("change", function () {

    errorMessage.textContent = "";

    resultSection.style.display = "none";

});
