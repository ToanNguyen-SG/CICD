export interface OurServiceType {
  createdAt: string
  description: string
  isDeleted: boolean
  thumbnailImage?: string
  name: string
  id: string
  items?: ItemsType[]
}

export type ItemsType = {
  id: string
  createdAt: string
  description?: string
  image: string
  isDeleted: boolean
  name: string
  ourId: string
}
