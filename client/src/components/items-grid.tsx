import { GameItem } from '@/types/game-item'

export function ItemsGrid({ items }: { items: GameItem[] }) {
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(clamp(4rem,10vw,6rem),1fr))]">
      {items.map((item) => (
        <div key={item.id} className="aspect-square rounded-md overflow-hidden">
          <img
            src={`/game-items/${item.id}.png`}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
