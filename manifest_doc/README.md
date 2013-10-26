マニフェスト仕様
=========
|要素名|プロパティ       |数   |説明                                    |型     |例　　                |親要素
|:-----|:----------------|----:|----------------------------------------|-------|----------------------|:-----
|theme |                 |    1|    
|      |wallpaper_path   |    1|壁紙の相対パス                          |String |"images/wallpaper.png"|
|      |isParallaxEnabled|  0-1|視差効果を有効にするかどうか            |boolean|"false"               |
|      |LAB_path         |  0-1|dock(左)の背景画像の相対パス            |String |"images/dock_l.png"   |
|      |MAB_path         |  0-1|dock(真ん中)の背景画像の相対パス        |String |"images/dock_m.png"   |
|      |RAB_path         |  0-1|dock(右)の背景画像の相対パス            |String |"images/dock_r.png"   |
|      |IndicatorColor   |  0-1|インディケーターの色(カラーコード16進数)|String |"#87CEEB"             |
|      |ThemeColor       |  0-1|テーマの色                              |String |"#87CEEB"             |
|page  |                 |1以上|                                        |       |                      |theme
|      |type             |    1|ページの種類(icon or html)              |String |"icon" "html"         |
|      |html_path        |   *1|htmlのパス(htmlページに必須)            |String |"index.html"          |

