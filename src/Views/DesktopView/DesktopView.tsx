import logo from "@/assets/images/light-theme-logo.png"
import LoginForm from '@/components/LoginForm/LoginForm'
import { Fragment } from 'react'
import "@/styles/Desktop/DesktopView.css"
export const DesktopView = () => {
  return (
    <Fragment>
      <div className="row h-100" >
        <div className="col-6">
          <div className="d-flex justify-content-center align-items-center logo-background" style={{ height: '100vh' }}>
            <div className="d-flex flex-column  ">
              <img src={logo} alt="" style={{ height: "11rem", width: "39rem" }} />
              <div className="text-white text-center fs-2">
                Bharat ka Job Connection Platform
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="mt-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
