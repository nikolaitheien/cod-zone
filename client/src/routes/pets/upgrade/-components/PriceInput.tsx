// PriceInput.tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { AnyFieldApi } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'

export type Price = number
export type Prices = Record<0 | 1 | 2 | 3, Price>

type PriceInputProps = {
  field: AnyFieldApi
}

export function PriceInput({ field }: PriceInputProps) {
  const starKeys: (0 | 1 | 2 | 3)[] = [0, 1, 2, 3]

  const update = (k: 0 | 1 | 2 | 3, v: Price) =>
    field.handleChange((prev: Prices) => ({ ...prev, [k]: v }))

  return (
    <div className="w-full">
      <div className="font-semibold text-lg pb-1">Set pet coin prices</div>
      <div className="text-sm text-muted-foreground pb-5">
        Enter the price of the cheapest skill card for each skill card level.
        For more details, read the{' '}
        <Link className="text-blue-300" to="/pets/upgrade" hash="pet-coins">
          Pet Coins
        </Link>{' '}
        section below.
      </div>

      <div className="flex gap-4">
        {starKeys.map((k) => (
          <div key={k} className="flex-1">
            <Label className="mb-2 ml-1 text-muted-foreground block text-left">
              {k}-star skill
            </Label>

            <Input
              type="number"
              min={0}
              value={field.state.value[k] ?? ''}
              onChange={(e) => {
                const n = e.target.value === '' ? 0 : +e.target.value
                update(k, n)
              }}
              disabled={k === 3}
              className="bg-background dark:bg-background"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
