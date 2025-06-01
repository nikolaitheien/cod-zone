export type ServerStatus = 'Full' | 'Crowded' | 'Active' | 'Normal'

export type Server = {
  index: number
  alliance: string
  status: ServerStatus
  king: string
}
