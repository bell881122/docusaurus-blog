---
# slug: Docusaurus2-Step3-blog
title: Docusaurus2 Step3-部落格教學
# author: Gao Wei
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
# author_image_url: https://avatars1.githubusercontent.com/u/2055384?v=4
description: Docusaurus, Docusaurus2, React, Markdown
tags: [Docusaurus, Docusaurus2, React, Markdown]
# image: https://en.wikipedia.org/wiki/Moon#/media/File:FullMoon2010.jpg
draft: true
---

## 前言
最初選中 Docusaurus2 來架設網站的主因，<br/>
就是看中它發布文章的功能，<br/>
而且還是使用簡便易用的 Markdown，<br/>
安裝完後迫不及待的馬上開始使用。

<!--truncate-->

MarkDown的操作方便就在於規則統一，<br/>
文章需要的基本元素完善，<br/>
只要熟悉 markdown 語法在 Docusaurus 裡的操作基本上大同小異，<br/>
其他部分只要找到應參數設置，<br/>
要新增和修改文章都十分簡單~

（如果不熟悉 Markdown 操作，可以打開範例網站的文件，第一頁就是 Markdown 格式說明囉）

## 教學
首先打開專案，
可以看到其中一個資料夾叫blog，
裡面每個檔案就是一篇部落格文章，
副檔名`md`指的就是 markdown 檔。

### 檔案命名規則
文章的日期預設直接讀取檔名，
因此要留意檔名格式必須是`YYYY-MM-DD-文檔名稱`

如果沒有標示日期，
目前測試似乎是會帶最後修改檔案的時間，
另外怎麼試都無法塞入時間，

如果是同樣的日期，
似乎默認修改日期最新的顯示在最前。
（如果有大神找到顯示時間的方法，
再請留言告知ＱＱ）


### Blog文章參數

可以在文章最開頭，
兩個`---`之間設定以下參數：

- **title**：文章標題（必要！）
- slug：自訂網址，預設為檔名
- tags：文章標籤，方便分類。
- draft：是否為草稿，預設為false，如設為true則文章部署後不會發布，但本地開發時仍會出現。
- description：顯示在 HTML `<meta>` 標籤裡面的文字。
- image：網站預覽縮圖，在LINE、Facebook等地方貼上連結時會顯示的圖片。
- hide_table_of_contents：是否隱藏文章右側的大綱，預設為fasle。
- author：作者名稱
- author_url：The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc.
- author_image_url：The URL to the author's thumbnail image.
- author_title：A description of the author.


### 文章預覽
在文章內加上`<!--truncate-->`，
以上的部分會成為文章預覽的部分，
以下則皆會隱藏起來，點擊 Read More 才會顯示。



另外Bolg還可以設為預設首頁，
打開`docusaurus.config.js`，找到presets裡面的blog，加上如下參數即可。

```
presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
      },
    ],
  ],
```


## Doc文件教學

要定義文件，要從`SideBar.js`裡面來看，
someSidebar是一個物件，裡面每個陣列的名稱，就是章節標題，陣列內的元素，則對應文章id





[Github Pages 發布方式介紹](https://v2.docusaurus.io/docs/deployment#deploy)


### 參考資料：
[・Docusaurus 官網](https://v2.docusaurus.io/)
