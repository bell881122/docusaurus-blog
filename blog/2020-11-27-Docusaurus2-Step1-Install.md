---
title: Docusaurus2 Step1-安裝與啟動
description: Docusaurus, Docusaurus2, React, Markdown, blog
tags: [Docusaurus, Docusaurus2, React, Markdown, blog]
image: "https://bell881122.github.io/docusaurus-blog/img/logo.svg"
---

一直想要一個放程式相關文章的部落格很久了，<br/>
挑挑選選最後選到了 Docusaurus2，<br/>
因為最近剛好學了 React，看到 Docusaurus2 簡直見獵心喜，<br/>
順帶就在這裡紀錄下自己的安裝建置和 Debug 的筆記。

<!--truncate-->

## 需求
根據官網，使用 Docusaurus2 須滿足以下條件
- Node > 10.15.1
- Yarn > 1.5 （不能使用 npm，一定要用 Yarn 才能跑）

## 安裝
根據官網教學，只要滿足上述需求環境，即可下載與執行套件囉。<br/>

### 安裝範例網站
`npx @docusaurus/init@latest init my-website classic`<br/>
其中 my-website 是專案名稱，classic 是套用的樣式名稱，其他樣式可參考官網。

不過個人在安裝教學示範檔時，由於依賴套件過大，跳出網路連線錯誤<br/>
`info There appears to be trouble with your network connection`

上網搜解法後，發現需要將 yarn 的 network 設定更大的 timeout 來跑

- 解法一：直接調整 yarn 的 network timeout<br/>
	`yarn install --network-timeout=10000`
- 解法二：單獨下載依賴套件<br/>
	`yarn add <yourPackage> --network-timeout 100000`

接著再次跑以下命令，就成功執行了。<br/>
`npx @docusaurus/init@latest init my-website classic`

### 啟動網站
安裝完整個專案後輸入<br/>
`cd my-website`<br/>
`yarn start`

就會跑`http://localhost:3000`自動執行網頁啦。


## 參考資料
[・Docusaurus 官網](https://v2.docusaurus.io/)<br/>
[・Docusaurus 2 介紹與使用](https://eddychang.me/docusaurus-v2-intro)<br/>
[・只要 10 分鐘！用 Docusaurus 輕鬆打造專案文件網站（介紹內容為Docusaurus1.0）](https://speakerdeck.com/clementtang/zhi-yao-10-fen-zhong-yong-docusaurus-qing-song-da-zao-zhuan-an-wen-jian-wang-zhan)