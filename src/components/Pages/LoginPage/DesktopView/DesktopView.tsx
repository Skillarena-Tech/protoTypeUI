import logo from "@/assets/images/light-theme-logo.png"
import LoginForm from '@/components/LoginForm/LoginForm'
import { Fragment } from 'react'
import "@/styles/Desktop/DesktopView.css"
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";

export const DesktopView = () => {
  return (
    <Fragment>
      <div className="row h-100" >
        <div className="col-5">
          <div className="logo-background h-100 pb-5" >
            <img src={logo} alt="" className="mt-5 " style={{ height: "11rem", width: "39rem" }} />
            <div className="text-white text-center mt-1 fs-2 fw-bold ">
              Bharat Ka Apna
              <br />
              Job Portal
            </div>
          </div>
        </div>

        <div className="col-7 mt-5">
          <div className="d-flex flex-row justify-content-end">
            <div className="me-5">
              <Link to="/" className="text-decoration-none">
                <RxExit style={{ transform: "scale(-1,-1)" }} />
                <span className="ms-1">Back to Homepage</span>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
