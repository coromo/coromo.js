/**
 * owm.coromo.js
 * v0.1.0
 * @requires coromo.js API v0.1.0
 * @requires OpenWeatherMap API v2.5
 *
 * @discription
 *
 * Released under the MIT license.
 */
( function(global) {
    var _weatherCallback;
    function getCurrentWeather(callback) {
        _weatherCallback = callback ||
        function() {
        };
        navigator.geolocation.getCurrentPosition(function(position) {
            loadJS('http://api.openweathermap.org/data/2.5/find?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&cnt=1&callback=coromo.owm.weatherchange');
        }, function() {
        });
    }

    function loadJS(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    function weatherchange(data) {
        _weatherCallback(data);
    }


    global.coromo.owm = {
        weatherchange : weatherchange,
        getCurrentWeather : getCurrentWeather
    };
}(this));
