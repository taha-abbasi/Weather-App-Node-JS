var weather = require('./weather.js');
var location = require('./location.js');

weather(function (currentWeather) {
    console.log(currentWeather);
});

location(function (location) {
    if (!location) {
        console.log('Unable to fetch location.');
        return;
    }
    console.log('city: ' + location.city);
    console.log('log/lat: ' + location.loc);
});
