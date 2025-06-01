import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { useGameItems } from '@/hooks/use-game-items'
import { formatCategoryName } from '@/lib/formatCategoryName'
import { columns } from '@/routes/economy/items/-columns'
import { DataTable } from '@/routes/economy/items/-data-table'
import { ALL_CATEGORIES, GameItemCategory } from '@/types/game-item'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDownIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/economy/items/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: items, isLoading, error } = useGameItems()
  const [category, setCategory] = useState<GameItemCategory[]>([
    ...ALL_CATEGORIES,
  ])
  const [search, setSearch] = useState<string>('')

  const filtered = useMemo(
    () =>
      (items ?? []).filter(
        (item) =>
          category.includes(item.category) &&
          item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [items, category, search]
  )

  return (
    <div className="w-2/3 mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">Items</div>
      <div className="text-muted-foreground pb-8 w-full">
        Below is a list of (almost) all items in the game. The list does not
        include items from quests or events, with a couple of exceptions. The
        list does not include all variations of hero tokens. The list does not
        include artifacts.
      </div>

      <div className="flex gap-2">
        <div className="relative w-1/3">
          <Input
            type="text"
            placeholder="Filter items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="relative w-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                Categories <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={0}
              align="start"
              className="absolute left-0 w-full mt-1"
            >
              {ALL_CATEGORIES.map((c) => (
                <DropdownMenuCheckboxItem
                  key={c}
                  checked={category.includes(c)}
                  onCheckedChange={(checked) => {
                    setCategory((prev) =>
                      checked ? [...prev, c] : prev.filter((x) => x !== c)
                    )
                  }}
                >
                  {formatCategoryName(c)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="py-2">
        <DataTable columns={columns} data={filtered} />
      </div>
    </div>
  )
}
