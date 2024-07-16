import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import Profile from './routes/Profile.tsx'
import Location from './routes/Location.tsx'
import Story from './routes/Story.tsx'
import Messages from './routes/Messages.tsx'
import Explore from './routes/Explore.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: '/location',
    element: <Location />
  },
  {
    path: '/story',
    element: <Story />
  },
  {
    path: '/messages',
    element: <Messages />
  },
  {
    path: '/explore',
    element: <Explore />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
