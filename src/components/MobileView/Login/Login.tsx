import logo from "@/assets/images/dark-theme-logo.png";
import LoginForm from "@/components/LoginForm/LoginForm";

import "@/styles/Mobile/Login.css";

// icons

export const Login = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' id="login">
            <div className="" id="logo">
                <img src={logo} className="logo " alt="" />
            </div>

            <LoginForm />
        </div>
    )
}
