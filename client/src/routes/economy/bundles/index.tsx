import { createFileRoute } from '@tanstack/react-router'

// function getBundleRows(): GameBundleRow[] {
//   return GAME_BUNDLES.flatMap((bundle) =>
//     bundle.bundles.map((sub) => ({
//       id: bundle.id,
//       name: bundle.name,
//       price: sub.price,
//       items: sub.items,
//       totalGemValue: sub.totalGemValue,
//     }))
//   )
// }

export const Route = createFileRoute('/economy/bundles/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-2/3 mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">Bundles</div>
      <div className="text-muted-foreground pb-8 w-full">
        Below is a list of bundles, including their prices and the expected gem
        value per dollar. For time-based bundles, such as the Basic Monthly
        Pack, the <i>total item count</i> over the entire duration is used in
        the calculation of the gem value per dollar column.
      </div>

      <div>{/* <DataTable columns={columns} data={getBundleRows()} /> */}</div>
    </div>
  )
}
