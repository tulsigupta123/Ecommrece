import React,{useContext} from 'react'
import {authContext} from '../Components/Context.jsx'
import deleteIcon from '../assets/Images/CommonImg/deleteIcon.svg'
import {Link} from 'react-router-dom'
const CartPage = () => {
  const {cartItem,data,deleteItemFromCart} = useContext(authContext);
  const cartData = data.filter((prod,ind)=>cartItem.includes(prod.id));
    return (
    <>
      <h3 align="center">Cart Items</h3>
      {
        cartItem.length > 0 ? (
          <>
   <div className="cartProductDiv">
    {
      cartData.map((product,ind)=>{
return(
  <>
  <div className="CartPageCards" key={ind}>
      <img src={product.image} alt="" style={{height:'100px',width:'160px'}}/>
        <h3 style={{marginTop:'15px'}}>{product.title}</h3> 
        <h2 style={{marginTop:'15px'}}>${product.price}</h2> 
        <div className="wishIcon cartDelIcon" onClick={()=>deleteItemFromCart(product.id)}><img src={deleteIcon} alt="" style={{marginTop:'3px'}} /></div>
      </div>
  </>
)
      }
      )
    }
   </div>
          </>
        ):
        (
          <>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
           <p style={{color:'red',margin:'30px auto',fontSize:'20px'}}>Your cart is empty</p>
              <Link to='/all-products'> <button style={{height:'46px',width:'110px',backgroundColor:'#E94747',border:'none',borderRadius:'4px',fontSize:'15px',fontWeight:'400',color:'white'}}>Shop Now</button></Link>
              </div>
              </>
        )
      }
           
    </>
  )
}

export default CartPage