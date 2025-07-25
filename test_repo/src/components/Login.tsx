import React from "react";
import {myTracker} from '../../../src/index';
import { persistAnonymousID, persistUserID } from "../utils";

function Login() {
    const login = (e)=>{
      e.preventDefault();
      const anonymousId = myTracker.init("MYNTRA");
      const userId = "123";
      myTracker.identify(userId, {
        gender:"Male"
      })
      persistUserID(userId);
      persistAnonymousID(anonymousId);
    }

    const handleTracking = ()=>{
        
    }
  
    return (
        <>
            <h2>Login Form</h2>

            <form className="App" onSubmit={login}>
                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <input type="submit" style={{ backgroundColor: "#a1eafb" }} value={'Login'}/>
            </form>
        </>
    );
}

export default Login;