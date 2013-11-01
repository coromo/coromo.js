/**
 * coromo.js
 * v0.1.1
 * @requires coromo API v1.0.3
 *
 * @discription
 * coromo API bind
 * Released under the MIT license.
 */
( function(global) {

    var _editFavoriteFolderCallback;
    function editFavoriteFolder(callback) {
        _editFavoriteFolderCallback = callback ||
        function() {
        };
        andjs.editFavoriteFolder();
    }


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

    function getFavoriteFolderApps() {
        var obj;
        var favoriteFolderApp = ( typeof andjs.getFavoriteFolderApps !== "undefined") ? andjs.getFavoriteFolderApps() : JSON.stringify({
            appNames : ['Twitter', 'Facebook'],
            imgSrcs : ['', ''],
            packageNames : ['', ''],
            classNames : ['', '']
        });
        try {
            obj = JSON.parse(favoriteFolderApp);
        } catch (e) {
            var err = new Error('returned invalid JSON from coromo API');
            throw err;
        }
        return obj;
    }

    function openAllApps() {
        andjs.openAllApps();
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
