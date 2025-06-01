import { Button } from '@/components/ui/button'
import { formatCategoryName } from '@/lib/formatCategoryName'
import { GameItem } from '@/types/game-item'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<GameItem>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img src={`/game-items/${row.original.id}.png`} className="size-8" />
          <span>{row.original.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      return formatCategoryName(row.original.category)
    },
  },
  {
    accessorKey: 'gem_value',
    header: 'Gem Value',
  },
]
