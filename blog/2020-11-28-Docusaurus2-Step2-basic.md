---
slug: Docusaurus2-Step2-basic
title: Docusaurus2 Step2-基礎教學
# author: Gao Wei
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
# author_image_url: https://avatars1.githubusercontent.com/u/2055384?v=4
tags: [Docusaurus, Docusaurus2, React, Markdown]
draft: true
---

這邊簡單介紹一下我目前為止有使用到的區塊。

首先打開`docusaurus.config.js`這個基礎設定檔，來介紹一些我架設這個網站時有用到的設定。

- **title：**網站名稱
- tagline：歡迎頁的Slogan
- organizationName：
    組織名稱（不確定使用在哪裡，不過改成自己的英文名字了）
- projectName：專案名稱
- themeConfig（重要五顆星）

這邊主要說說`themeConfig` 這個節點，
裡面是網站的架構，
可以看到預設分成`navbar`跟`footer`。




## navbar
這裡定義了網站基本設定，以及有哪些頁面





再來打開pages資料夾裡面的index.js，這裡顧名思義就是歡迎頁啦。

### 歡迎頁大致結構
- Layout
    - title：可設定文檔名稱，也就是網頁頁籤顯示文字。
    - description：寫進HTML檔header裡面的meta訊息，對SEO很重要。



### 參考資料：
[・Docusaurus 官網](https://v2.docusaurus.io/)
