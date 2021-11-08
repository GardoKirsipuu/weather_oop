// weather object
const weather = new Weather('Mustvee');
// UI object
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// get city weather and display it
function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}