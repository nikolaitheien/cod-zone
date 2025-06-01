import { Button } from '@/components/ui/button'
import { GameBundleRow } from '@/types/game-bundle-row'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<GameBundleRow>[] = [
  {
    accessorKey: 'name',
    header: ({}) => {
      return <span className="text-base">Name</span>
    },
    cell: ({ row }) => {
      const { id, name } = row.original
      return (
        <div className="flex gap-3 items-center">
          <img
            src={`/src/assets/game-bundles/${id}.png`}
            className="w-16 h-16 object-contain"
          />
          <span className="text-base">{name}</span>
        </div>
      )
    },
    meta: { width: 'w-1/2' },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="text-base">Price</span>
          <ArrowUpDown className="ml-2 size-5" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const { price } = row.original
      return <span className="text-base">${price.toLocaleString('us-US')}</span>
    },
    meta: { width: 'w-1/4', align: 'text-center' },
  },
  {
    id: 'gems_per_dollar',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="text-base">Gems/$1</span>
          <ArrowUpDown className="ml-2 size-5" />
        </Button>
      )
    },
    accessorFn: (r) => r.totalGemValue / r.price,
    cell: (row) => {
      return (
        <span className="text-base">
          {Math.floor(row.getValue<number>()).toLocaleString('us-US')}
        </span>
      )
    },
    meta: { width: 'w-1/4', align: 'text-center' },
  },
]
