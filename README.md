# 協裕布莊官網

Next.js 靜態網站，商品頁面在 build 時從 Notion API 拉取庫存資料。

## Getting Started

```bash
npm install
npm run dev
```

## 環境變數設定

### 本機開發

複製 `.env.local.example` 為 `.env.local`，填入實際值：

```bash
cp .env.local.example .env.local
```

`.env.local` 內容：

```
NOTION_TOKEN=ntn_xxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Cloudflare Pages 部署環境變數

請至 Cloudflare Pages → 你的專案 → **Settings** → **Environment variables**，新增以下變數（Production & Preview 兩個環境都要設）：

| 變數名稱 | 說明 |
|---|---|
| `NOTION_TOKEN` | Notion Integration Token（`ntn_` 開頭） |
| `NOTION_DATABASE_ID` | Notion 資料庫 ID |

> ⚠️ 設完環境變數後需重新觸發 build，商品頁才會抓到最新資料。

## Notion 資料庫欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| 布料名稱 | title | 商品名稱 |
| 類別 | select | 棉布、絲料、蕾絲、刺繡布、牛仔布、功能性布料 |
| 顏色 | multi_select | 可多選顏色 |
| 庫存狀態 | select | 有貨 / 剩少量 / 缺貨 |
| 單位 | select | 尺 |
| 庫存數量 | number | 現有庫存數量 |
| 單價 | number | 每單位售價（NT$） |
| 描述 | rich_text | 商品說明 |
| 顯示於官網 | checkbox | ✅ 勾選才會出現在商品頁面 |

## 重新部署（更新庫存）

庫存資料在 build 時拉取（靜態生成），若要更新商品頁，需要重新觸發 Cloudflare Pages build。

可透過以下 Deploy Hook 觸發：

```bash
curl -X POST "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/62b440cb-f162-4c57-a261-99031c42bb45"
```

或在 Cloudflare Pages → Deployments → **Retry deployment**。
