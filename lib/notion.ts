import { Client } from '@notionhq/client'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID ?? ''

export interface FabricItem {
  id: string
  name: string
  category: string
  colors: string[]
  stockStatus: '有貨' | '剩少量' | '缺貨' | string
  unit: string
  quantity: number | null
  price: number | null
  description: string
}

export interface CategoryGroup {
  category: string
  items: FabricItem[]
}

// Notion property helpers
function getTitle(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === 'title') {
    return p.title.map((t) => t.plain_text).join('')
  }
  return ''
}

function getSelect(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === 'select') {
    return p.select?.name ?? ''
  }
  return ''
}

function getMultiSelect(page: PageObjectResponse, prop: string): string[] {
  const p = page.properties[prop]
  if (p?.type === 'multi_select') {
    return p.multi_select.map((s) => s.name)
  }
  return []
}

function getNumber(page: PageObjectResponse, prop: string): number | null {
  const p = page.properties[prop]
  if (p?.type === 'number') {
    return p.number
  }
  return null
}

function getRichText(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === 'rich_text') {
    return p.rich_text.map((t) => t.plain_text).join('')
  }
  return ''
}

// getCheckbox is used in the Notion filter query (server-side),
// but available as a helper if needed client-side too.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCheckbox(page: PageObjectResponse, prop: string): boolean {
  const p = page.properties[prop]
  if (p?.type === 'checkbox') {
    return p.checkbox
  }
  return false
}

export async function getInventory(): Promise<CategoryGroup[]> {
  if (!DATABASE_ID) {
    console.warn('[notion] NOTION_DATABASE_ID is not set — returning empty inventory')
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: '顯示於官網',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: '類別',
          direction: 'ascending',
        },
        {
          property: '布料名稱',
          direction: 'ascending',
        },
      ],
    })

    const items: FabricItem[] = (response.results as PageObjectResponse[]).map((page) => ({
      id: page.id,
      name: getTitle(page, '布料名稱'),
      category: getSelect(page, '類別'),
      colors: getMultiSelect(page, '顏色'),
      stockStatus: getSelect(page, '庫存狀態'),
      unit: getSelect(page, '單位'),
      quantity: getNumber(page, '庫存數量'),
      price: getNumber(page, '單價'),
      description: getRichText(page, '描述'),
    }))

    // Group by category
    const groupMap = new Map<string, FabricItem[]>()
    for (const item of items) {
      const cat = item.category || '其他'
      if (!groupMap.has(cat)) groupMap.set(cat, [])
      groupMap.get(cat)!.push(item)
    }

    return Array.from(groupMap.entries()).map(([category, catItems]) => ({
      category,
      items: catItems,
    }))
  } catch (error) {
    console.error('[notion] Failed to fetch inventory:', error)
    return []
  }
}
