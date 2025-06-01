import { ItemsGrid } from '@/components/items-grid'
import { ItemsTable } from '@/components/items-table'
import { Button } from '@/components/ui/button'
import { GameItem } from '@/types/game-item'
import { createFileRoute } from '@tanstack/react-router'
import { LayoutGridIcon, Rows3Icon } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/economy/items2/')({
  component: RouteComponent,
  // loader: async () => {
  //   return useQuery<GameItem[], Error>({
  //     queryKey: ['game-items'],
  //     queryFn: async () => {
  //       const res = await fetch('http://localhost:8080/items')
  //       if (!res.ok) {
  //         throw new Error(`Error fetching items: ${res.statusText}`)
  //       }
  //       return res.json()
  //     },
  //   })
  // },
  loader: async () => {
    const res = await fetch('http://localhost:8080/items')
    if (!res.ok) throw new Error('Failed to load items')
    const items = (await res.json()) as GameItem[]

    items.sort((a, b) => {
      // // 1. Category descending
      // const catCmp = b.category.localeCompare(a.category)
      // if (catCmp !== 0) return catCmp

      // // 2. Name alphabetical
      // const nameCmp = a.name.localeCompare(b.name)
      // if (nameCmp !== 0) return nameCmp

      // 3. Gem value descending
      return b.gem_value - a.gem_value
    })

    return items
  },
})

function RouteComponent() {
  const items = Route.useLoaderData()
  const [layout, setLayout] = useState<'grid' | 'table'>('grid')

  return (
    <div className="w-full mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">Items</div>
      <div className="text-muted-foreground pb-8 w-full">
        Below is a list of (almost) all items in the game. The list does not
        include items from quests or events, with a couple of exceptions. The
        list does not include all variations of hero tokens. The list does not
        include artifacts.
      </div>

      <div className="flex gap-2">
        <Button
          variant={layout === 'grid' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLayout('grid')}
        >
          <LayoutGridIcon />
          Grid
        </Button>
        <Button
          variant={layout === 'table' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLayout('table')}
        >
          <Rows3Icon />
          Table
        </Button>
      </div>

      <div className="pt-6">
        {layout === 'grid' ? (
          <ItemsGrid items={items} />
        ) : (
          <ItemsTable items={items} />
        )}
      </div>
    </div>
  )
}
