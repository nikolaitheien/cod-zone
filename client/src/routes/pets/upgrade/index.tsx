import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { useForm, useStore } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import { Actions, ActionSelect } from './-components/ActionSelect'
import { AverageRegens } from './-components/AverageRegens'
import { PetsADay } from './-components/PetsADay'
import { PriceInput, Prices } from './-components/PriceInput'
import { ReleaseFailRate } from './-components/ReleaseFailRate'
import { calcUpgrade } from './-math'
import { PetCoinsSection } from './-sections/PetCoins'
import { RegenerationPotionsSection } from './-sections/RegenerationPotions'
import { UpgradeMethodSection } from './-sections/UpgradeMethod'

// TODO:
// Upgrade to 1-star instead of buying one straight
// Failing means reuse, so less pet coins needed
// Starting from a different starting point than zero
// Chance to catch 1-star reduces the amount of days
// You only release 80% so no need to pay for all of them
// Pets spawn with 1-star already
// Pets sapwn with 2 slots only

export const Route = createFileRoute('/pets/upgrade/')({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      actions: { 0: 'consume', 1: 'consume', 2: 'consume' } as Actions,
      prices: { 0: 20, 1: 120, 2: 842, 3: 842 * 5 } as Prices,
      failRate: 0.25,
      petsADay: 5,
      avgRegens: 4.5,
    },
  })

  const result = useStore(form.store, (s) =>
    calcUpgrade(
      s.values.actions,
      s.values.prices,
      s.values.failRate,
      s.values.avgRegens
    )
  )

  const petsADay = useStore(form.store, (s) => s.values.petsADay)

  return (
    <div className="w-2/3 mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">
        Talent Skill Upgrade Calculator
      </div>
      <div className="text-lg text-muted-foreground pb-8 w-full">
        This is a tool to calculate the amount of 0-star talent skill cards
        needed to upgrade to a 3-star talent skill. It also calculates the
        expected cost based on whether you decide to consume or release the
        skill cards.
      </div>

      <Card className="w-full mx-auto mb-20">
        <CardHeader>
          <Card className="bg-background m-5">
            <div className="text-base text-center pb-8 w-full h-full">
              <div className="font-semibold text-xl pb-1 w-full">Results</div>
              <div className="pb-1 text-muted-foreground">
                You would need{' '}
                <span className="font-bold text-fuchsia-300">
                  {Math.ceil(result.totalDups[0])}
                </span>{' '}
                0-star talent skills
              </div>
              <div className="pb-1 text-muted-foreground">
                It would take{' '}
                <span className="font-bold text-emerald-300">
                  {Math.ceil(result.totalDups[0] / petsADay)}
                </span>{' '}
                days on average
              </div>
              <div className="pb-1 text-muted-foreground">
                It would cost approximately{' '}
                <span className="font-bold text-amber-300">
                  {Math.ceil(result.totalPrice)}
                </span>{' '}
                pet coins
              </div>
              <div className="pb-1 text-muted-foreground">
                You would use around{' '}
                <span className="font-bold text-blue-300">
                  {Math.ceil(result.totalRegens)}
                </span>{' '}
                regeneration potions
              </div>
            </div>
          </Card>
        </CardHeader>

        <Separator />

        <CardContent className="m-5 space-y-7">
          <form.Field name="actions">
            {(field) => <ActionSelect field={field} />}
          </form.Field>
          <form.Field name="prices">
            {(field) => <PriceInput field={field} />}
          </form.Field>
        </CardContent>

        <Separator />

        <CardFooter className="m-5">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="group flex items-center gap-1"
              >
                Advanced settings
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="grid gap-6 pt-4">
                <form.Field name="failRate">
                  {(field) => <ReleaseFailRate field={field} />}
                </form.Field>

                <form.Field name="petsADay">
                  {(field) => <PetsADay field={field} />}
                </form.Field>

                <form.Field name="avgRegens">
                  {(field) => <AverageRegens field={field} />}
                </form.Field>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardFooter>
      </Card>

      <UpgradeMethodSection />
      <PetCoinsSection />
      <RegenerationPotionsSection />
    </div>
  )
}
