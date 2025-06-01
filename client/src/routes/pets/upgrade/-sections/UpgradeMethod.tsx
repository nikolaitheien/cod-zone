import { CircleArrowUpIcon } from 'lucide-react'

export function UpgradeMethodSection() {
  return (
    <section id="upgrade-method" className="pb-10">
      <header className="flex items-center gap-2 pb-3">
        <CircleArrowUpIcon className="size-7" />
        <h2 className="font-semibold text-2xl w-full">Upgrade Method</h2>
      </header>

      <div className="text-base text-muted-foreground pb-5 w-full space-y-4">
        <p>
          Select which upgrade method you will use for each of the various tiers
          of talent skill cards. There are two forms of upgrade methods:{' '}
          <span className="text-green-300">consume</span> and{' '}
          <span className="text-purple-300">release</span>. Deciding which
          method you use heavily influences both the amount of skill cards you
          need to catch, and also the cost.
        </p>

        <ul className="list-disc pl-6 pt-3 space-y-2">
          <li>
            The <span className="text-green-300">consume</span> method means you
            will directly consume the pet into another pet. This method does not
            cost any pet coins, nor do you need to use any regeneration potions.
          </li>
          <li>
            The <span className="text-purple-300">release</span> method means
            that you will release the pet with a talent skill, along with a
            normal skill one level higher. For example, you would release the
            pet with a 0-star talent skill in the first slot, and a 1-star
            Robust Body in the second slot. This method costs pet poins, and
            requires you to use regeneration potions to ensure the pet only has
            two skill slots when you release it.
          </li>
        </ul>
      </div>
    </section>
  )
}
