import { useNavigate } from "react-router-dom"
import {myTracker} from '../../../src/index';

const Cart = ({cart, setCart}) => {
  const navigate = useNavigate();
  const logout = ()=>{
    setCart([]);
    myTracker.track('logout')
    myTracker.reset();
    navigate('/', {replace: true})
  }
  return (
    <div>
        <h2>Cart Items</h2>

        {
            cart.map((p)=>(
                <div key={p.id} style={{display:'flex', gap: 5,marginBottom:'20px'}}>
                    {p.product}
                </div>
            ))
        }

        <button onClick={logout} style={{color:'red'}}>Logout</button>

    </div>
  )
}
export default Cart