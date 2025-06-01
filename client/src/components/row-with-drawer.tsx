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
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { GAME_ITEMS } from '@/data/game-items'
import { GameBundleRow } from '@/types/game-bundle-row'
import { useReactTable } from '@tanstack/react-table'
import { InfoIcon } from 'lucide-react'
import { useState } from 'react'

export function RowWithDrawer({
  row,
  children,
}: {
  row: ReturnType<
    ReturnType<typeof useReactTable>['getRowModel']
  >['rows'][number]
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const bundle = row.original as GameBundleRow

  return (
    <>
      <TableRow
        data-state={row.getIsSelected() ? 'selected' : undefined}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </TableRow>

      <TableRow>
        <TableCell colSpan={row.getVisibleCells().length} className="p-0">
          <div
            className={`overflow-hidden bg-card transition-[max-height] duration-300 ease-in-out origin-top ${
              open ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <div className="p-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Gem Value</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <InfoIcon className="h-4 w-4 cursor-help text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            align="center"
                            className="max-w-xs"
                          >
                            You can hover on any gem value number to see how it
                            was calculated.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {bundle.items.map(({ item: itemId, quantity }) => {
                    const gameItem = GAME_ITEMS.find((i) => i.id === itemId)!
                    const totalValue = gameItem.gem_value * quantity

                    return (
                      <TableRow key={gameItem.id}>
                        <TableCell>{quantity}</TableCell>

                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <img
                              src={`/src/assets/game-items/${gameItem.id}.png`}
                              className="h-6 w-6"
                            />
                            <span>{gameItem.name}</span>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-help">{totalValue}</span>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              align="center"
                              className="max-w-xs"
                            >
                              {gameItem.gem_value_explanation}
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    )
                  })}

                  <TableRow className="border-t">
                    <TableCell />
                    <TableCell className="text-right font-bold">
                      Total:
                    </TableCell>
                    <TableCell className="font-medium">
                      {bundle.totalGemValue} gems
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
