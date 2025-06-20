function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (tempInput === "") {
    resultDiv.innerHTML = "❗ Please enter a value.";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temp;
  }

  resultDiv.innerHTML = 
    `<p>🌡️ Celsius: ${celsius.toFixed(2)} °C</p>
    <p>🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
    <p>🧊 Kelvin: ${kelvin.toFixed(2)} K</p>`;
}