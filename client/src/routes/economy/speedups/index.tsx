import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Input } from '@/components/ui/input'
import { useSpeedups } from '@/hooks/use-speedups'
import {
  ALL_SPEEDUP_SOURCES,
  ALL_SPEEDUP_TYPES,
  SpeedupSource,
  SpeedupType,
} from '@/types/speedup'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDownIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { columns } from './-columns'
import { DataTable } from './-data-table'

export const Route = createFileRoute('/economy/speedups/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: speedups, isLoading, error } = useSpeedups()
  const [sources, setSources] = useState<SpeedupSource[]>([
    ...ALL_SPEEDUP_SOURCES,
  ])
  const [types, setTypes] = useState<SpeedupType[]>([...ALL_SPEEDUP_TYPES])
  const [search, setSearch] = useState<string>('')

  const filtered = useMemo(
    () =>
      (speedups ?? []).filter(
        (speedup) =>
          sources.includes(speedup.source) &&
          types.includes(speedup.type) &&
          speedup.item_id.toLowerCase().includes(search.toLowerCase())
      ),
    [speedups, sources, types, search]
  )

  return (
    <div className="w-2/3 mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">Speedups</div>
      <div className="text-muted-foreground pb-8 w-full">
        Below is a comprehensive list of the ways to obtain speedups in the
        game. The higher the minutes per gem, the better.
      </div>

      <div className="flex gap-2">
        <div className="relative w-1/3">
          <Input
            type="text"
            placeholder="Filter speedups..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="relative w-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                Sources <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={0}
              align="start"
              className="absolute left-0 w-full mt-1"
            >
              {ALL_SPEEDUP_SOURCES.map((source) => (
                <DropdownMenuCheckboxItem
                  key={source}
                  checked={sources.includes(source)}
                  onCheckedChange={(checked) => {
                    setSources((prev) =>
                      checked
                        ? [...prev, source]
                        : prev.filter((x) => x !== source)
                    )
                  }}
                >
                  {source}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="relative w-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                Types <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={0}
              align="start"
              className="absolute left-0 w-full mt-1"
            >
              {types.map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={types.includes(type)}
                  onCheckedChange={(checked) => {
                    setTypes((prev) =>
                      checked ? [...prev, type] : prev.filter((x) => x !== type)
                    )
                  }}
                >
                  {type}
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
