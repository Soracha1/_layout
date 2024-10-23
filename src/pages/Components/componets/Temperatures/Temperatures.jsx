import React, { useEffect, useState } from "react";
import Variable from "../Variable/Variable";
import "./Temperatures.css";

function Temperatures(props) {
  const [celsius, setCelsius] = useState(props.celsius || 25);
  const [fahrenheit, setFahrenheit] = useState(props.fahrenheit || 77);
  const [kelvin, setKelvin] = useState(props.kelvin || 298.15);

  // Convert Celsius to Fahrenheit
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Convert Celsius to Kelvin
  function convertCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  // Convert Fahrenheit to Celsius
  function convertFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // Convert Kelvin to Celsius
  function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  // Effect to update Fahrenheit and Kelvin whenever Celsius changes
  useEffect(() => {
    setFahrenheit(convertCelsiusToFahrenheit(celsius));
    setKelvin(convertCelsiusToKelvin(celsius));
  }, [celsius]);


  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">Temperatures</h3>
      <h3 className="temperatures-display">
        <span className="badge bg-primary">{celsius.toFixed(2)}C</span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)}F</span>
        <span className="badge bg-primary">{kelvin.toFixed(2)}K</span>
      </h3>
      <div className="temperatures-variables">
        <Variable name={"Celsius"} value={celsius} setValue={setCelsius} />
        <Variable name={"Fahrenheit"} value={fahrenheit} setValue={(f) => setCelsius(convertFahrenheitToCelsius(f))} />
        <Variable name={"Kelvin"} value={kelvin} setValue={(k) => setCelsius(convertKelvinToCelsius(k))} />
      </div>
    </div>
  );
}

export default Temperatures;
