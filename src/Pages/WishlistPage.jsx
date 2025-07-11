import React,{useContext} from 'react'
import {authContext} from '../Components/Context.jsx'
import deleteIcon from '../assets/Images/CommonImg/deleteIcon.svg'

const WishlistPage = () => {
  const {data,wishlistItem,deleteProductFromWishlist,addItemToCart,cartItem} = useContext(authContext);
  const wishlist = data.filter((prod,ind)=> wishlistItem.includes(prod.id));
  return (
    <>
     <h2 align="center">Your Wishlist</h2>
     {
      wishlist.length > 0 ? (
   <div className="productDiv">
    {
      wishlist.map((product,ind)=>{
return(
  <>
  <div className="cards" key={ind}>
      <img src={product.image} alt="" style={{height:'100px',width:'160px'}}/>
        <h3 style={{marginTop:'15px'}}>{product.title.slice(0,40)}...</h3> 
         <p  style={{marginTop:'10px',fontSize:'17px'}}>{product.description.slice(0,70)}...</p> 
          {/* <div className="wishIcon" onClick={()=>addProductToWishlist(product.id)}><img src={WishlistHeartIcon} alt="" style={{marginTop:'3px'}} /></div> */}
          <div className="wishIcon" onClick={()=>deleteProductFromWishlist(product.id)}><img src={deleteIcon} alt="" style={{marginTop:'3px'}} /></div>
              <h3 style={{marginTop:'7px'}}>Price : ${product.price}</h3> 
           <button className="AddToCartBtn" onClick={()=>addItemToCart(product.id)}>Add To Cart</button>
      </div>
  </>
)
      }
      )
    }
   </div>
      ):(
        <p align="center" style={{color:'red',margin:'30px auto',fontSize:'20px'}}>Your wishlist is empty</p>
      )
     }
        
   </>
  )
}

export default WishlistPage