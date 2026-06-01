# STUDIO SHOP

一個以 Studio Doe 極簡風格為靈感設計的服飾購物網站，使用 React + Vite 開發。

---

## 專題目的

本專題旨在實作一個具有現代電商網站核心功能的服飾購物平台，讓使用者能夠瀏覽商品、查看商品細節、加入購物車並進行結帳操作。

網站風格參考 Studio Doe 的極簡設計理念，以簡潔排版與高品質商品圖片呈現品牌形象。

---

## 使用技術

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* CSS3
* Local Storage

---

## 功能介紹

### 商品展示

* 商品列表瀏覽
* 商品分類篩選
* 商品名稱搜尋

### 商品詳細頁

* 查看商品資訊
* 多張商品圖片展示
* 圖片輪播切換功能

### 購物車

* 加入商品
* 刪除商品
* 修改商品數量
* 自動計算總金額

### 資料保存

* 使用 Local Storage 儲存購物車資料
* 重新整理後仍保留購物內容

### 其他功能

* 回到頁面頂端按鈕
* 響應式網頁設計（RWD）
* 簡易結帳功能

---

## 專案架構

src

├── assets

├── components

│ ├── Navbar

│ ├── ProductCard

│ ├── ProductList

│ ├── ImageSlider

│ ├── CartDrawer

│ └── ScrollTopButton

├── pages

│ ├── Home

│ └── ProductDetail

├── data

│ └── products

└── App

---

## 主要程式邏輯

### 商品資料管理

商品資料統一儲存在 products.js 中，並透過 props 傳遞至各個元件。

### 圖片輪播

使用 useState 管理目前顯示的圖片索引，透過左右按鈕切換商品圖片。

### 購物車管理

使用 useState 管理購物車內容：

* 新增商品
* 更新數量
* 刪除商品

### 資料持久化

使用 useEffect 監聽購物車變化：

* 將資料寫入 Local Storage
* 網頁重新整理後自動載入

---

## Demo

GitHub Repository：

https://github.com/liuyanho/Shop

網站連結：

https://shop-rho-rust.vercel.app

---

## 作者

National Yang Ming Chiao Tung University

資訊管理與財務金融學系

劉姸和
