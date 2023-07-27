export interface QuestionsType {
  content: string
  type: string
  cateQuestionId: string
  answers: string[]
  createdAt: string | Date
}

export interface AnswersType {
  content: string
  parentId: string
  createdAt: string | Date
}
