export function PetCoinsSection() {
  return (
    <section id="pet-coins" className="scroll-mt-20 pb-5">
      <header className="flex items-center gap-2">
        <img
          src={`/icons/pet-coin.png`}
          alt="Regeneration Potion"
          className="size-7"
          loading="lazy"
        />
        <h2 className="font-semibold text-2xl pb-1 w-full">Pet Coins</h2>
      </header>

      <section className="py-2">
        <h3 className="font-semibold text-lg">How to use</h3>
        <p className="text-base text-muted-foreground pb-5 w-full">
          Enter the lowest market price for each skill card level. To find these
          prices, you can do the following:
        </p>
        <ol className="list-decimal list-inside pl-6 pt-2 space-y-2 text-muted-foreground ">
          <li>Go to the Pet Sanctuary in-game and open the Exchange House.</li>
          <li>
            Set the "Order" option to <strong>Price: Low-High</strong>.
            <div className="my-2">
              <div className="pl-5">
                <img
                  src="/exchange-house-order.png"
                  alt="Exchange House - Order Filter"
                  className="w-64 max-w-md border rounded-lg"
                />
              </div>
            </div>
          </li>
          <li>
            Use the "Filter" option to select the desired star level.
            <div className="pl-5">
              <img
                src="/exchange-house-filter.png"
                alt="Exchange House - Filter Option"
                className="w-64 max-w-md border rounded-lg"
              />
            </div>
          </li>
          <li>
            Record the price of the first listing. This is the lowest price for
            that level.
            <div className="pl-5">
              <img
                src="/exchange-house-skill.png"
                alt="Exchange House - Filter Option"
                className="w-64 max-w-md border rounded-lg"
              />
            </div>
          </li>
        </ol>
        <p className="text-base text-muted-foreground pt-2">
          Repeat this process for each star level to capture all prices.
        </p>
      </section>

      <section className="py-2">
        <h3 className="font-semibold text-lg pt-2">Calculations</h3>
        <div className="text-base text-muted-foreground pb-5 w-full space-y-4">
          <p>
            The calculation for pet coins is a pessimistic calculation. That
            means, more than likely, you will spend less than the estimate you
            see in the calculator.
          </p>
          <p>
            The estimate is calculated by adding together all of the skill cards
            needed to <span className="text-purple-300">release</span> the
            talent skill levels you configured in the calculator. For example,
            if you chose to <span className="text-purple-300">release</span> all
            of the 0-star talent skills, and you need a total of 100 0-star
            talent skills to upgrade, the pet coins would be calculated by
            multiplying the price of a 1-star skill card with 100.
          </p>
          <p>
            The fail rate of releases does <strong>not</strong> influence the
            price. When you fail a release, you would get the skill card back,
            and you can reuse it for the next release.
          </p>
          <p>
            If your method is to release 0-star talent skills, note that the
            calculator does not factor in that some pets spawn with a 1-star
            skill card already. This would be a significant price reduction.
          </p>
        </div>
      </section>
    </section>
  )
}
