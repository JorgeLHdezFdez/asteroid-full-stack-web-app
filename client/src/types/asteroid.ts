export interface Asteroid {
  id: string
  name: string
  diameter: {
    min: number
    max: number
  }
  hazardous: boolean
  closeApproachData: {
    date: string
    velocity: string
    distance: string
  }[]
}

export interface DateRange {
  startDate: string
  endDate: string
}
