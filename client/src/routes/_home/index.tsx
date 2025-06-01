import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="w-full mx-auto">
      <div className="font-bold text-4xl pb-1 w-full">Leaderboards</div>
      <div className="text-muted-foreground pb-8 w-full">
        Below is a list of (almost) all items in the game. The list does not
        include items from quests or events, with a couple of exceptions. The
        list does not include all variations of hero tokens. The list does not
        include artifacts.
      </div>

      <div className="flex gap-2"></div>
    </div>
  )
}

export default Route
