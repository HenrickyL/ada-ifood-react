import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './_hooks/index.tsx'
import { RouterProvider } from 'react-router-dom'
import {routes} from './_routes'
import styled from 'styled-components'
import { useTheme } from './_hooks/theme.tsx'


const STY = styled.div`
  position: absolute;
  display: flex;
  bottom: 4px;
  left: 4px;
  z-index: 5;

  button{
    width: 2rem;
    height: 2rem;
    padding: 8px;
    border-radius: 50%;
    background-color: blue;
  }
`
const TestTheme = ()=>{
  const  {toggle} = useTheme()
  return(
    <STY>
      <button onClick={toggle}>T</button>
    </STY>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routes} />
      <TestTheme />
    </Providers>
  </React.StrictMode>,
)
