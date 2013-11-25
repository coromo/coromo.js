/**
 * coromo.js
 * v0.1.2
 * @requires coromo API v1.0.7
 *
 * @discription
 * coromo API bind
 * Released under the MIT license.
 */
( function(global) {

    var XHR = new XMLHttpRequest();
    function get(query, parms, callback) {
        var isFirst = true;
        for (var name in parms) {
            query += isFirst ? "?" : "&";
            isFirst = false;
            query += name + "=" + parms[name];
        }
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if ( typeof callback !== 'undefined') {
                    callback(XHR.responseText);
                }
            }
        };
        XHR.open("GET", query, true);
        XHR.send(null);
    }

    function execAction(action) {
        if (action === "mailer") {
            get('/openMailer')
        } else if (action === "camera") {
            get('/openCamera');
        } else if (action === "dial") {
            get('/openPhone');
        } else if (action === "gallery") {
            get('/openGallery');
        } else if (action === "settings") {
            get('/openSettings');
        } else if (action === "maps") {
            get('/openMaps');
        } else if (action === "browser") {
            get('/openBrowser');
        } else if (action === "search") {
            get('/openSearch');
        }
    }

    function openAllApps() {
        get('/openAllApps');
    }

    function openFavoriteApps() {
        get('/openFavoriteApps');
    }

    function openApp(packageName, className) {
        get('/openApp', {
            "packageName" : packageName,
            "className" : className
        });
    }

    function openUri(uri) {
        get('/openUri', {
            'uri' : uri || 'http://google.com'
        });
    }

    function revertHomeScreen() {
        get('/revertHomeScreen');
    }

    var _watchBatteryStatusCallback;
    function watchBatteryStatus(callback) {
        _watchBatteryStatusCallback = callback ||
        function() {
        };
        get('/getBatteryStatus', {}, function(data) {
            var json;
            try {
                json = JSON.parse(data);
            } catch(e) {
                alert(data);
            }
            var status = json.status;
            var level = json.level;
            _watchBatteryStatusCallback({
                status : status,
                level : level
            });
        });
    };
    global.onBatteryChange = function(level, status) {
        _watchBatteryStatusCallback({
            status : status,
            level : level
        });
    };
    global.coromo = {
        execAction : execAction,
        openFavoriteApps : openFavoriteApps,
        openAllApps : openAllApps,
        openApp : openApp,
        openUri : openUri,
        revertHomeScreen : revertHomeScreen,
        watchBatteryStatus : watchBatteryStatus
    };
    Object.defineProperty(global.coromo, 'onResume', {
        get : function() {
            return global.resetOpacity;
        },
        set : function(v) {
            global.resetOpacity = v;
        }
    });

}(this));
