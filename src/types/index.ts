export type CategoryType = {
  content: string
  createdAt: string | Date
  id: string
  isDeleted: boolean
}

export type OurItemsType = {
  description?: string
  fileName: string
  name: string
  image: string
  ourId: string
}

export interface RequestPayload {
  name: string
  email: string
  phone: string
  company: string
  position: string
  serviceUWant?: string
  RequestAnswers: RequestAnswersType[]
}

export type RequestAnswersType = {
  question: string
  answer: string
}

export type QuestionsType = {
  id: string
  content: string
  cateQuestionId: string
  type: string
  isDeleted: boolean
  createdAt: string
  answers: AnswersType[]
}

export type AnswersType = {
  id: string
  content: string
  parentId: string
  isDeleted: boolean
  createdAt: string
  answer?: string
}
export interface Item {
  id: string
  name: string
  description: string | null
  image: string
  isDeleted: boolean
  createdAt: string
  ourId: string
}

export interface OurType {
  id: string
  name: string
  thumbnailImage?: string
  description: string
  isDeleted: boolean
  createdAt: string
  items: Item[]
}

export enum OurTypeEnum {
  game = 'game',
  service = 'service',
  website = 'website',
  mobileApp = 'mobileApp',
  campaigns = 'campaigns',
  films = 'films',
}
