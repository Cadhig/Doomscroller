import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import Profile from './routes/Profile.tsx'
import Story from './routes/Story.tsx'
import Dms from './routes/Dms.tsx'
import Explore from './routes/Explore.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export interface Notification {
  classes?: string,
  setNotificationModal: (props: boolean) => void,
  notificationModal: boolean
}

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
    path: '/story',
    element: <Story />
  },
  {
    path: '/messages',
    element: <Dms />
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
