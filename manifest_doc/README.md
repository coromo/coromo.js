マニフェスト仕様
=========
|要素名|属性名       |数   |説明                                    |型     |例　　                |親要素
|:-----|:----------------|----:|----------------------------------------|-------|----------------------|:-----
|theme |                 |    1|    
|page  |                 |1以上|                                        |       |                      |theme
|      |type             |    1|ページの種類(icon or html)              |String |"icon" "html"         |
|      |html_path        |   *1|htmlのパス(htmlページに必須)            |String |"index.html"          |
|      |wallpaper_path   |   *1|壁紙の相対パス(iconページに指定) html_pathが優先される　　　　|String |"images/wallpaper.png"|

例
--------

```xml:Manifest.xml
<?xml version="1.0" encoding="utf-8"?>
<theme>
    <page type="html"
          html_path="01.html"
            />
    <page type="icon"
　        wallpaper_path="images/background.png"
            />
</theme>
```
