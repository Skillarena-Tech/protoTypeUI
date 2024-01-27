import logo from "@/assets/images/dark-theme-logo.png";
import LoginForm from "@/components/LoginForm/LoginForm";
import { useAppContext } from "@/hooks/useAppContext";
import "@/styles/Mobile/Login.css";

export const MobileView = () => {
    const { navigate} = useAppContext()
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' id="login">
            <div className="" id="logo">
                <div className="cursor-pointer" onClick={() => {
                    navigate('/')
                }}
                    style={{
                        cursor: 'pointer'
                    }}
                ><img src={logo} className="logo " alt="" /></div>
            </div>

            <LoginForm />
        </div>
    )
}
