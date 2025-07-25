import {myTracker} from '../../../src/index';

const PRODUCTS = [
    {product: 'Almirah', price:'200', id: 1},
    {product: 'Mango', price:'5', id: 2},
    {product: 'Shoes', price:'10', id: 3}
]
const ProductList = ({setCart}) => {

    const addToCart = (item)=>{
        setCart(prev=> [...prev, item]);
        myTracker.track("add_to_cart", { product:item.product, price: item.price })
        
    }
  return (
    <div>
        {
            PRODUCTS.map((p)=>(
                <div key={p.id} style={{display:'flex', gap: 5}}>
                    {p.product}
                    <button onClick={()=> addToCart(p)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}
export default ProductList