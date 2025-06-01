import type { Speedup } from '@/types/speedup'
import { useQuery } from '@tanstack/react-query'

async function fetchSpeedups(): Promise<Speedup[]> {
  const res = await fetch('http://localhost:8080/speedups')
  if (!res.ok) {
    throw new Error(`Error fetching speedups: ${res.statusText}`)
  }
  return res.json()
}

export function useSpeedups() {
  return useQuery<Speedup[], Error>({
    queryKey: ['speedups'],
    queryFn: fetchSpeedups,
  })
}
