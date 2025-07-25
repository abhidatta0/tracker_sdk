import { useNavigate } from 'react-router-dom';
import {myTracker} from '../../../src/index';

function Login() {
    const navigate = useNavigate();
    const login = (e)=>{
      e.preventDefault();
      myTracker.init("MYNTRA");
      const userId = "123";
      myTracker.identify(userId, {
        gender:"Male"
      });
      navigate('/productlist')
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