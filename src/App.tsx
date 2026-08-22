import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import AudiencePage from './pages/AudiencePage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'
import ReviewsPage from './pages/ReviewsPage'
import ServicesPage from './pages/ServicesPage'

const router = createBrowserRouter([
  { path: '/', element: <Layout/>, children: [
    { index: true, element: <HomePage/> },
    { path: 'tjanster', element: <ServicesPage/> },
    { path: 'privat', element: <AudiencePage audience="Privat"/> },
    { path: 'foretag', element: <AudiencePage audience="Företag"/> },
    { path: 'projekt', element: <ProjectsPage/> },
    { path: 'om-oss', element: <AboutPage/> },
    { path: 'recensioner', element: <ReviewsPage/> },
    { path: 'kontakt', element: <ContactPage/> },
    { path: '*', element: <NotFoundPage/> },
  ]}
])

export default function App(){return <RouterProvider router={router}/>}
