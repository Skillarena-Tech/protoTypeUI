import logo from "@/assets/images/light-theme-logo.png";
import LoginForm from '@/components/LoginForm/LoginForm';
import "@/styles/Desktop/DesktopView.css";
import { Fragment } from 'react';

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

        <div className="col-7 h-100">
          <div className="d-flex justify-content-center align-items-center flex-column h-100 pb-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
