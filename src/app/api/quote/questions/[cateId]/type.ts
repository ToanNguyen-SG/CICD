export interface CategoryQuestionsType {
  content: string
  createdAt: string | Date
}

export interface QuestionsTypeUpdate {
  content?: string
  type?: string
  cateQuestionId?: string
}
