const createHome = async (updatedData: any) => {
  const response = await fetch(`/api/home`, {
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

export { createHome }
