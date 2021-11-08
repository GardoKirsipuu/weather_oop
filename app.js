// weather object - init location
const weather = new Weather('Mustvee');
// UI object
const ui = new UI();

const city = document.getElementById('submit-btn');
const input = document.querySelector('input').value;

console.log(city);

// change city and get weather data
city.addEventListener('click', weather.changeCity());


// get city weather and display it
function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', getWeather);