import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './_hooks/index.tsx'
import { RouterProvider } from 'react-router-dom'
import {routes} from './_routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  </React.StrictMode>,
)
