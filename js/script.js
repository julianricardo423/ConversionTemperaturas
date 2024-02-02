let conversion = () =>
{
    let celsiusI = Number.parseInt(document.getElementById('celsius').value);
    
    let fahrenheit = document.getElementById('fahrenheit');
    let kelvin = document.getElementById('kelvin');

    let conversionFahrenheit = ((celsiusI * 9) / 5) + 32;
    let conversionKelvin = celsiusI + 273.15;
    
    kelvin.textContent = `Los grados en kelvin son: ${conversionKelvin}`;
    fahrenheit.textContent = `Los grados en fahrenheit son: ${conversionFahrenheit}`;

}