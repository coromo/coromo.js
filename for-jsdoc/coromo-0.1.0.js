/**
 * @class coromoのAPI郡を持つクラス
 */
var coromo = {
    /**
     * 指定したアプリケーションを開く. <br>
     * アプリが存在しない場合はGoogle Playに飛ぶ.<br><br>
     * *よく使うアプリのパッケージ名とクラス名の例
     * <table style="border: 0px #7F8FB1 solid;" cellspacing="0" cellpadding="0">
     * <tbody>
     * <tr>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>アプリ名</td>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>packageName</td>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>className</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Twitter </td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.twitter.android"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.twitter.android.StartActivity"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Facebook </td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.facebook.katana"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.facebook.katana.LoginActivity"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Line</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"jp.naver.line.android"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"jp.naver.line.android.activity.SplashActivity"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">カレンダー</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.google.android.calendar"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.android.calendar.AllInOneActivity"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">乗換案内</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"jp.co.jorudan.nrkj"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"jp.co.jorudan.nrkj.Main"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Instagram</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.instagram.android"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.instagram.android.activity.<br>MainTabActivity"</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Dropbox</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"co.coromo.android.homeapp"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.dropbox.android.activity.<br>DropboxBrowser""</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">Evernote</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.evernote"</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">"com.evernote.ui.HomeActivity"</td>
     * </tr>
     * </tbody>
     * </table><br>
     * @param {String} packageName パッケージ名
     * @param {String} className クラス名
     * @static
     */
    openApp : function(packageName, className) {
    },
    /**
     * 指定したURIを開く
     * @param {String} [uri] 開くURI.指定されない場合はgoogle.comを開く
     * @static
     */
    openUri : function(uri) {
    },
    /**
     * アクション名からアプリを起動する
     * @param {String} action アクション名("mailer","camera","dial","gallery","settings","maps","search")
     * @static
     */
    execAction : function(action) {
    },
    /**
     * アプリ一覧画面を開く
     * @static
     */
    openAllApps : function() {
    },
    /**
     * ホーム画面を切り替える
     * @static
     */
    revertHomeScreen : function() {
    },
    /**
     * バッテリー残量を監視する
     * @param {Function} callback 取得データ(BatteryStatusオブジェクト)を返す<br><br>
     * *BatteryStatusオブジェクト
     * <table style="border: 0px #7F8FB1 solid;" cellspacing="0" cellpadding="0">
     * <tbody>
     * <tr>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>属性名</td>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>値の内容</td>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>値の単位</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">level</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">バッテリー残量</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">％</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">status</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">バッテリーの状態</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">文字列</td>
     * </tr>
     * </tbody>
     * </table>
     * @static
     */
    watchBatteryStatus : function(callback) {
    },
    /**
     * お気に入りフォルダに登録されたアプリ情報を取得する
     * @return {Object} FavoriteFolderAppsオブジェクト
     * @static
     */
    getFavoriteFolderApps : function() {
    },
    /**
     * お気に入りフォルダの編集画面を呼び出す
     * @param {Function} callback 編集結果(FavoriteFolderAppsオブジェクト)を返す<br><br>
     * * FavoriteFolderAppsオブジェクト
     * <table style="border: 0px #7F8FB1 solid;" cellspacing="0" cellpadding="0">
     * <tbody>
     * <tr>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>属性名</td>
     * <td bgcolor="#7F8FB1" style="color:#FFFFFF";>値の内容</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">appNames</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">String[] アプリの名前</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">app1ImageSrc</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">String[] アイコン画像へのパス</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">app1PackageName</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">String[] アプリのパッケージ名</td>
     * </tr>
     * <tr>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">app1ClassName</td>
     * <td valign="top" style="border: 1px #7F8FB1 solid;">String[] アプリのクラス名</td>
     * </tr>
     * </tbody>
     * </table>
     */
    editFavoriteFolder : function(callback) {
    }
};
/**
 * @class OpenWeatherMapから天気を取得するAPI
 */
coromo.owm = {
    /**
     * 現在の天気を取得する
     * @param {Function} callback 取得したデータを返す
     * @static
     */
    getCurrentWeather : function(callback) {
    }
};
