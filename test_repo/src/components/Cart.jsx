const Cart = ({cart}) => {
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
    </div>
  )
}
export default Cart