var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv;


if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location was provided');
    weather(argv.l, function (currentWeather) {
        console.log(currentWeather);
    });
} else {
    location(function (location) {
        console.log('Location was not provided');
        if (!location) {
            console.log('Unable to fetch location.');
            return;
        }
        weather(location.city, function (currentWeather) {
            console.log(currentWeather);
        });
    });
}