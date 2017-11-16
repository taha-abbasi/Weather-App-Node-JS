var request = require('request');

module.exports = function (location) {

    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7e3f1dd378bef34937935f0128e0a29c&q=' + encodedLocation + '&type=like&units=imperial';


        if (!location) {
            reject('No location provided');
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather');
            } else {
                if (body.cod === '404') {
                    reject(body.message);
                } else {
                    resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
                }
                // console.log(JSON.stringify(body, null, 4));

            }
        });
    });
};