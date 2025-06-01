import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { AnyFieldApi } from '@tanstack/react-form'

export type Action = 'consume' | 'release'
export type Actions = Record<0 | 1 | 2, Action>

type ActionSelectProps = {
  field: AnyFieldApi
}

export function ActionSelect({ field }: ActionSelectProps) {
  const starKeys = [0, 1, 2] as const

  const update = (k: 0 | 1 | 2, v: Action) =>
    field.handleChange((prev: Actions) => ({ ...prev, [k]: v }))

  return (
    <div className="w-full">
      <div className="font-semibold text-lg pb-1">Select upgrade method</div>
      <div className="text-sm text-muted-foreground pb-5">
        Select the consume/release method you will perform for each level of
        talent skills.
      </div>

      <div className="flex gap-4">
        {starKeys.map((key) => (
          <div key={key} className="flex-1">
            <Label className="mb-2 ml-1 text-muted-foreground block text-left">
              {key}-star talent skill
            </Label>

            <Select
              value={field.state.value[key]}
              onValueChange={(val) => update(key, val as Action)}
            >
              <SelectTrigger className="w-full bg-background dark:bg-background">
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consume">Consume</SelectItem>
                <SelectItem value="release">Release</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  )
}
