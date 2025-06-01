import { SpeedupSources } from '@/data/speedup-sources'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<SpeedupSources>[] = [
  {
    accessorKey: 'item',
    header: () => {
      return <span className="text-base">Item</span>
    },
    cell: ({ row }) => {
      const { item } = row.original
      return (
        <div className="flex gap-3 items-center">
          <img
            src={`/src/assets/game-items/${item}.png`}
            className="w-8 h-8 object-contain"
          />
          <span className="text-sm">{item}</span>
        </div>
      )
    },
    meta: { width: 'w-2/7' },
  },
  {
    accessorKey: 'from',
    header: () => {
      return <span className="text-base">From</span>
    },
    cell: ({ row }) => {
      const { from } = row.original

      const fromColorMap: Record<typeof from, string> = {
        'VIP Shop': 'text-purple-300',
        'Goblin Market': 'text-green-300',
      }

      return <div className={fromColorMap[from]}>{from}</div>
    },
    meta: { width: 'w-1/7' },
  },
  {
    accessorKey: 'sale',
    header: () => {
      return <span className="text-base">Sale</span>
    },
    cell: ({ row }) => {
      const { sale } = row.original
      return <div className="text-sm">-{sale}%</div>
    },
    meta: { width: 'w-1/7' },
  },
  {
    accessorKey: 'amount',
    header: () => {
      return <span className="text-base">Amount</span>
    },
    meta: { width: 'w-1/7' },
  },
  {
    accessorKey: 'price',
    header: () => {
      return <span className="text-base">Price</span>
    },
    meta: { width: 'w-1/7' },
  },
  {
    accessorKey: 'minutes_per_gem',
    header: () => {
      return <span className="text-base">Minutes/Gem</span>
    },
    meta: { width: 'w-1/7' },
  },
]
