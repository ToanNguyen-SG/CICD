export interface ServiceType {
  name: string
  parentId?: string
  description: string
  createdAt?: string | Date
}

export interface ServiceBodyType {
  service: ServiceType
  childs: ServiceType[]
}
