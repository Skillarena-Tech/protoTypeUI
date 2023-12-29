import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { JobListings } from './pages/JobListings'
import { AppContextProvider } from './context/AppContext'

const App = () => {
  useEffect(() => {
    document.title = 'SkillArena'
  }, [])
  return (
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<JobListings />} path="/jobListings" />
        </Route>
      </Routes>
    </AppContextProvider>
  )
}

export default App