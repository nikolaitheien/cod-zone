import type { GameItem } from '@/types/game-item'
import { useQuery } from '@tanstack/react-query'

async function fetchGameItems(): Promise<GameItem[]> {
  const res = await fetch('http://localhost:8080/items')
  if (!res.ok) {
    throw new Error(`Error fetching items: ${res.statusText}`)
  }
  return res.json()
}

export function useGameItems() {
  return useQuery<GameItem[], Error>({
    queryKey: ['game-items'],
    queryFn: fetchGameItems,
  })
}
