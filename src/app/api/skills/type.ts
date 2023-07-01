export interface SkillType {
  name: string
  image: string
  parentId?: string
  createdAt?: string | Date
}

export interface SkillBodyType {
  skill: SkillType
  childs: SkillType[]
}
