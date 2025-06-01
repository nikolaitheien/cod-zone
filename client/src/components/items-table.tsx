import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { GameItem } from '@/types/game-item'

export function ItemsTable({ items }: { items: GameItem[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Gem value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <img
                  src={`/game-items/${item.id}.png`}
                  alt={item.name}
                  className="size-8"
                  loading="lazy"
                />
                <span>{item.name}</span>
              </div>
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-right">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help underline-dotted">
                      {item.gem_value.toLocaleString()}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    {item.gem_value_explanation}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="ml-1" aria-label="gem" role="img">
                💎
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
