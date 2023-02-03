import React from "react";
import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";



export default function Login() {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className='login_container'>
            <div className="login_container_left">
                <div className="login_container_left_text">
                    <p>NETWORKING HAS NEVER BEEN EASIER</p>
                </div>
            </div>
            <div className="login_container_right">
                <div className="form_container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Y1dix8Znc1QDHxsfD08ahNd2PjogtliBVMXREw7L&s" />
                    <form>

                        <button onClick={() => loginWithRedirect()} >Login/Signup</button>
                    </form>


                </div>
            </div>
           
        </div>
    )
}