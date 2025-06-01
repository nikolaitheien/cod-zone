import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import type { AnyFieldApi } from '@tanstack/react-form'

type ReleaseFailRateProps = {
  field: AnyFieldApi
}

export function ReleaseFailRate({ field }: ReleaseFailRateProps) {
  const update = (v: number) => field.handleChange(() => v / 100)

  // return (
  //   <div className="w-full">
  //     <div className="font-semibold text-lg pb-1">Set release fail rate</div>
  //     <div className="text-sm text-muted-foreground pb-5">
  //       Percentage of releases that <em>fail</em> to grant the talent skill.
  //       Based on testing, this is roughly 25 %.
  //     </div>

  //     <div className="flex items-center gap-4">
  //       <Slider
  //         id="fail-rate"
  //         min={0}
  //         max={99}
  //         step={1}
  //         value={[Math.round((field.state.value ?? 0) * 100)]}
  //         onValueChange={([v]) => update(v)}
  //         className="flex-1 bg-background dark:bg-background
  //                    [&_[data-slot='slider-track']]:bg-background
  //                    [&_[data-slot='slider-track']]:dark:bg-background"
  //       />
  //       <span className="w-[4ch] flex-none text-right text-sm tabular-nums">
  //         {Math.round((field.state.value ?? 0) * 100)}%
  //       </span>
  //     </div>
  //   </div>
  // )

  return (
    <div className="grid grid-cols-2 gap-10 w-full items-center">
      <div className="flex flex-col">
        <Label htmlFor="release-fail-rate" className="text-sm font-semibold">
          Set release fail rate
        </Label>
        <p className="text-sm text-muted-foreground">
          Percentage of releases that <em>fail</em> to grant the talent skill.
          Based on testing, this is roughly 25 %.
        </p>
      </div>
      <div className="self-center w-full">
        <div className="flex items-center w-full">
          <Slider
            id="fail-rate"
            min={0}
            max={99}
            step={1}
            value={[Math.round((field.state.value ?? 0) * 100)]}
            onValueChange={([v]) => update(v)}
            className="flex-1 bg-background dark:bg-background
                   [&_[data-slot='slider-track']]:bg-background
                   [&_[data-slot='slider-track']]:dark:bg-background"
          />
          <span className="w-[3ch] ml-3 text-sm tabular-nums">
            {`${Math.round((field.state.value ?? 0) * 100)}%`}
          </span>
        </div>
      </div>
    </div>
  )
}
