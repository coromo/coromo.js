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

    global._resumeFromFavoriteFolder = function(result) {
        var obj;
        try {
            obj = JSON.parse(result);
        } catch (e) {
            var err = new Error('returned invalid JSON from coromo API');
            throw err;
        }
        _editFavoriteFolderCallback(obj);
    };

    function execAction(action) {
        if (action === "mailer") {
            andjs.openMailer();
        } else if (action === "camera") {
            andjs.openCamera();
        } else if (action === "dial") {
            andjs.openPhone();
        } else if (action === "gallery") {
            andjs.openGallery();
        } else if (action === "settings") {
            andjs.openSettings();
        } else if (action === "maps") {
            andjs.openGoogleMaps();
        } else if (action === "browser") {
            andjs.openBrowser();
        } else if (action === "search") {
            andjs.openSearchBox();
        }
    }

    function openAllApps() {
        andjs.openAllApps();
    }

    function openFavoriteApps() {
        andjs.openFavorite();
    }

    function openApp(packageName, className) {
        andjs.openApplication(packageName, className);
    }

    function openUri(uri) {
        andjs.openURI(uri || 'http://google.com');
    }

    function revertHomeScreen() {
        andjs.revertHomeScreen();
    }

    var _watchBatteryStatusCallback;
    function watchBatteryStatus(callback) {
        _watchBatteryStatusCallback = callback ||
        function() {
        };
        var status = typeof andjs !== 'undefined' ? andjs.getBatteryStatus() : "undefined";
        var level = typeof andjs !== 'undefined' ? andjs.getBatteryLevel() : -1;
        _watchBatteryStatusCallback({
            status : status,
            level : level
        });
    };
    global.onBatteryChange = function(level, status) {
        _watchBatteryStatusCallback({
            status : status,
            level : level
        });
    };
    global.coromo = {
        editFavoriteFolder : editFavoriteFolder,
        execAction : execAction,
        getFavoriteFolderApps : getFavoriteFolderApps,
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
