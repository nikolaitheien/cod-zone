import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import type { AnyFieldApi } from '@tanstack/react-form'

type PetsADayProps = {
  field: AnyFieldApi
}

export function PetsADay({ field }: PetsADayProps) {
  const update = (v: number) => field.handleChange(() => v)

  return (
    <div className="grid grid-cols-2 gap-10 w-full items-center">
      <div className="flex flex-col">
        <Label htmlFor="pets-a-day" className="text-sm font-semibold">
          Pets caught a day
        </Label>
        <p className="text-sm text-muted-foreground">
          The number of pets you catch every day.
        </p>
      </div>
      <div className="self-center w-full">
        <div className="flex items-center w-full">
          <Slider
            id="pets-a-day"
            min={1}
            max={5}
            step={1}
            value={[field.state.value]}
            onValueChange={([v]) => update(v)}
            className="flex-grow [&_[data-slot='slider-track']]:bg-background [&_[data-slot='slider-track']]:dark:bg-background"
          />
          <span className="ml-3 text-sm tabular-nums">{field.state.value}</span>
        </div>
      </div>
    </div>
  )
}
