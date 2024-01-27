import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import { AppContextProvider } from './context/AppContext'
import { JobDetailPage, JobListings } from './pages/JobListings'
import { LoginPage } from './pages/LoginPage'
import { Search } from './pages/Search'

const App = () => {

  return (
    <AppContextProvider>
      <Loader />
      <Routes>
        <Route element={<Search />} path="/" />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<JobListings />} path="/search" />
        <Route element={<JobDetailPage />} path="/search/:id" />
      </Routes>
    </AppContextProvider>
  )
}

export default App