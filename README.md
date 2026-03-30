# 今天要吃什麼？

一個幽默風趣的食物決定應用，幫助你和朋友擺脫午餐選擇困難症！

## 🚀 功能特性

- 🎯 隨機決定午餐選項
- ➕ 自定義食物名單
- 🎨 優雅的 UI 設計
- ⚡ 快速響應的互動體驗
- 📱 響應式設計

## 📁 專案結構

```
what-to-eat/
├── src/
│   ├── components/           # React 組件
│   │   ├── ResultDisplay.tsx  # 結果顯示區域
│   │   ├── ItemList.tsx       # 食物名單列表
│   │   ├── ItemInput.tsx      # 新增食物輸入
│   │   └── Toast.tsx          # 通知提示框
│   ├── App.tsx                # 主應用組件
│   ├── main.tsx               # 應用入口
│   └── index.css              # 全局樣式 (Tailwind)
├── index.html                 # HTML 模板
├── package.json               # 項目配置和依賴
├── vite.config.ts             # Vite 配置
├── tsconfig.json              # TypeScript 配置
├── tailwind.config.js         # Tailwind CSS 配置
├── postcss.config.js          # PostCSS 配置
├── .gitignore                 # Git 忽略規則
└── README.md                  # 項目文檔
```

## 🛠️ 技術棧

- **React 18** - UI 框架
- **TypeScript** - 類型安全的 JavaScript
- **Vite** - 下一代前端構建工具
- **Tailwind CSS** - 實用優先的 CSS 框架
- **gh-pages** - GitHub Pages 部署工具

## 📦 安裝和使用

### 前置要求
- Node.js 16.0 或更高版本
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 本地開發

在本地啟動開發伺服器（包含熱重載）：

```bash
npm run dev
```

開發伺服器默認運行在 `http://localhost:5173`

### 生成生產版本

```bash
npm run build
```

Build 輸出位置：`./dist/`

輸出目錄包含所有優化的靜態資產，可直接部署到任何靜態主機。

### 本地預覽生產版本

```bash
npm run preview
```

## 🚀 部署到 GitHub Pages

### 前置設定

1. **修改 `package.json` 中的 homepage**

   將 `<your-username>` 替換為你的 GitHub 用戶名：

   ```json
   "homepage": "https://<your-username>.github.io/what-to-eat"
   ```

2. **檢查 `vite.config.ts` 中的 base**

   確保 base 設定與倉庫名稱匹配：

   ```typescript
   base: '/what-to-eat/'
   ```

### 部署步驟

#### 方法一：使用部署命令（推薦）

```bash
npm run deploy
```

這個命令會自動執行以下步驟：
1. 構建項目
2. 將 `dist/` 目錄推送到 GitHub Pages

#### 方法二：手動部署

```bash
# 1. 構建項目
npm run build

# 2. 安裝 gh-pages（如果未安裝）
npm install --save-dev gh-pages

# 3. 部署到 GitHub Pages
npx gh-pages -d dist
```

### GitHub Pages 配置

1. 進入 GitHub 倉庫設定 → Pages
2. 選擇 "Deploy from a branch"
3. 選擇 `gh-pages` 分支
4. 選擇 `/ (root)` 目錄
5. 點擊 Save

稍等片刻，你的應用就會發佈在 `https://<your-username>.github.io/what-to-eat/`

## 🎯 核心功能說明

### 1. 隨機決定（spin 功能）
- 點擊「幫我決定！」按鈕
- 應用會快速循環顯示食物選項
- 最後停留在一個隨機選擇的食物

### 2. 自定義名單
- 在輸入框輸入想吃的食物
- 按 Enter 或點擊「新增」按鈕
- 每個食物顯示為一個可移除的選項卡

### 3. 移除選項
- 點擊選項卡上的 × 按鈕
- 名單至少需保留一個選項

### 4. 重設名單
- 點擊「重設為預設名單」恢復默認食物列表

## 📝 開發指南

### 添加新食物到默認列表

編輯 `src/App.tsx` 中的 `DEFAULT_ITEMS`：

```typescript
const DEFAULT_ITEMS = ["便當", "牛肉麵", "水餃", ...] // 添加你的食物
```

### 修改樣式

- Tailwind CSS 配置：`tailwind.config.js`
- 全局樣式：`src/index.css`
- 組件樣式：各組件文件中的 className

### 添加新組件

創建新的 `.tsx` 文件在 `src/components/` 目錄，然後在 `App.tsx` 中導入使用。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 許可証

MIT License

---

**享受選擇食物的樂趣！🍜**
