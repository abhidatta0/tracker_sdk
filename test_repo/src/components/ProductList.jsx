import { useNavigate } from 'react-router-dom';
import {myTracker} from '../../../src/index';

const PRODUCTS = [
    {product: 'Almirah', price:'200', id: 1},
    {product: 'Mango', price:'5', id: 2},
    {product: 'Shoes', price:'10', id: 3}
]
const ProductList = ({setCart}) => {

    const navigate = useNavigate();
    const addToCart = (item)=>{
        setCart(prev=> [...prev, item]);
        myTracker.track("add_to_cart", { product:item.product, price: item.price })
        
    }

    const goToCart = ()=>{
        navigate('/cart');
    }
  return (
    <div>
        {
            PRODUCTS.map((p)=>(
                <div key={p.id} style={{display:'flex', gap: 5, marginBottom:'20px'}}>
                    {p.product}
                    <button onClick={()=> addToCart(p)}>Add to cart</button>
                </div>
            ))
        }

        <button onClick={goToCart} style={{color:'blue'}}>Go to cart</button>
    </div>
  )
}
export default ProductList