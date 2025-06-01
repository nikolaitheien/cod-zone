import { Button } from '@/components/ui/button'
import { Server, ServerStatus } from '@/types/server'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<Server>[] = [
  {
    accessorKey: 'server',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Server
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as ServerStatus

      const statusColors: Record<ServerStatus, string> = {
        Full: 'text-red-600',
        Crowded: 'text-orange-500',
        Active: 'text-yellow-500',
        Normal: 'text-green-600',
      }

      return <div className={statusColors[status]}>{status}</div>
    },
  },
  {
    accessorKey: 'alliance',
    header: 'Alliance',
  },
  {
    accessorKey: 'power',
    header: 'Power',
    cell: ({ row }) => {
      const power = parseInt(row.getValue('power'))
      const formattedPower = power.toLocaleString('fr-FR')
      return <div>{formattedPower}</div>
    },
  },
]
