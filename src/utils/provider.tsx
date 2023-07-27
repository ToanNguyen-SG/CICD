'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { I18nextProvider } from 'react-i18next'
import i18n from './I18N'

function Providers({ children }: React.PropsWithChildren) {
  const client = new QueryClient()
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={client}>
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </I18nextProvider>
    </>
  )
}

export default Providers
