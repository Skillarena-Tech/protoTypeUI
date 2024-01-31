import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import { JobDetailPage, JobListings } from './pages/JobListings'
import { LoginPage } from './pages/LoginPage'
import { Search } from './pages/Search'
import ProtectedRoutes from '@/routes/ProtectedRoutes'


const App = () => {
  return (
    <Fragment>
      <Loader />
      <Routes>
        <Route element={<LoginPage />} path='/' />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Search />} path="/home" />
          <Route element={<JobListings />} path="/search" />
          <Route element={<JobDetailPage />} path="/search/:id" />
        </Route>
      </Routes>

    </Fragment>
  )
}

export default App