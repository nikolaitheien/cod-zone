import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AnyFieldApi } from '@tanstack/react-form'

type AverageRegensProps = {
  field: AnyFieldApi
}

export function AverageRegens({ field }: AverageRegensProps) {
  const update = (v: number) => field.handleChange(() => v)

  return (
    <div className="grid grid-cols-2 gap-10 w-full items-center">
      <div className="flex flex-col">
        <Label htmlFor="pets-a-day" className="text-sm font-semibold">
          Average regeneration potions
        </Label>
        <p className="text-sm text-muted-foreground">
          The average amount of regeneration potions used to reroll a pet with 2
          skill slots.
        </p>
      </div>
      <div className="self-center w-full">
        <div className="flex items-center w-full">
          <Input
            id="pets-a-day"
            type="number"
            value={field.state.value}
            onChange={(e) => {
              const n = e.target.value === '' ? 0 : Number(e.target.value)
              update(n)
            }}
            className="bg-background dark:bg-background"
          />
        </div>
      </div>
    </div>
  )
}
