import { DELETE } from './../app/api/skills/[id]/route'
import { OurItemsType } from '@/types'

type OurServiceType = {
  description: string
  name: string
  thumbnailImage?: string
  fileName?: string
  typeOur: string
}

const createOurService = async (updatedData: OurServiceType) => {
  const response = await fetch(`/api/our/services`, {
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

const getAllOurService = async (type: string) => {
  const response = await fetch(`/api/our/services/type/${type}`, {
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

const getDetailOurService = async (id: string) => {
  const response = await fetch(`/api/our/services/${id}`, {
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

const deleteOurService = async (id: string) => {
  const response = await fetch(`/api/our/services/${id}`, {
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

const createOurItemsService = async (updatedData: OurItemsType) => {
  const response = await fetch(`/api/our/services/items`, {
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

const deleteOurServiceItem = async (id: string) => {
  const response = await fetch(`/api/our/services/items/${id}`, {
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

export {
  createOurService,
  getAllOurService,
  getDetailOurService,
  createOurItemsService,
  deleteOurServiceItem,
  deleteOurService,
}
