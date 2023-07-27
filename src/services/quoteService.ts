import { RequestPayload } from '@/types'

type QuestionsPayload = {
  content: string
  type: string
  answers: string[]
}

const createQuestions = async (updatedData: QuestionsPayload) => {
  const response = await fetch(`/api/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const createCategoryQuestions = async (payload: { content: string }) => {
  const response = await fetch(`/api/quote/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getCategoryQuestions = async () => {
  const response = await fetch(`/api/quote/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getAllQuestion = async () => {
  const response = await fetch(`/api/quote/questions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getAllQuestionByCate = async (cateId: string) => {
  const response = await fetch(`/api/quote/questions/${cateId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const createRequest = async (updatedData: RequestPayload) => {
  const response = await fetch(`/api/quote/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getAllRequest = async () => {
  const response = await fetch(`/api/quote/request`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getRequestById = async (id: string) => {
  const response = await fetch(`/api/quote/request/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const deleteCategoryQuestions = async (id: string) => {
  const response = await fetch(`/api/quote/category/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const updateCategoryQuestions = async (payload: { id: string; content: string }) => {
  const response = await fetch(`/api/quote/category/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const getQuestionById = async (id: string) => {
  const response = await fetch(`/api/quote/questions/detail/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const deleteQuestionById = async (id: string) => {
  const response = await fetch(`/api/quote/questions/detail/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}

const updateQuestions = async (payload: {
  id: string
  data: {
    content?: string
    type?: string
    cateQuestionId?: string
  }
}) => {
  const response = await fetch(`/api/quote/questions/detail/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload.data),
  })

  if (!response.ok) {
    throw new Error('Failed to update user.')
  }

  return response.json()
}
export {
  createQuestions,
  getAllQuestion,
  deleteCategoryQuestions,
  getAllQuestionByCate,
  createCategoryQuestions,
  getCategoryQuestions,
  createRequest,
  getAllRequest,
  getRequestById,
  updateCategoryQuestions,
  getQuestionById,
  deleteQuestionById,
  updateQuestions,
}
