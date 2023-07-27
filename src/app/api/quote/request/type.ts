export interface RequestPayload {
  fullName: string
  email: string
  phone: string
  company: string
  position: string
  serviceUWant: string
  createdAt: string | Date

  RequestAnswers: RequestAnswersType[]
}

export type RequestAnswersType = {
  question: string
  answer: string
  requestId: string
}
