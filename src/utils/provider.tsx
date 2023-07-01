'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function Providers({ children }: React.PropsWithChildren) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>{children}</Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default Providers
