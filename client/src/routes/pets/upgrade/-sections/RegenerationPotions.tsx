export function RegenerationPotionsSection() {
  return (
    <section id="regeneration-potions" className="scroll-mt-20 pb-5">
      <header className="flex items-center gap-2 pb-3">
        <img
          src="/game-items/regeneration_potion.png"
          alt="Regeneration Potion"
          className="size-7"
          loading="lazy"
        />
        <h2 className="font-semibold text-2xl w-full">Regeneration Potions</h2>
      </header>

      <div className="text-base text-muted-foreground pb-5 w-full space-y-4">
        <p>
          The number of Regeneration Potions needed is a pessimistic calculation
          based on the consume/release method you selected. Only talent skill
          cards that you release will need Regeneration Potions.
        </p>
        <p>
          Based on some minimal testing data, the amount of Regeneration Potions
          needed to regenerate a pet with 2 skill card slots seems to be around
          4.5 potions.
        </p>
        <p>
          The calculation does <strong>not</strong> (yet) factor in that some
          pets spawn with only one talent skill card and one skill card. This
          would significantly decrease the amount of Regeneration Potions
          needed.
        </p>
      </div>
    </section>
  )
}
