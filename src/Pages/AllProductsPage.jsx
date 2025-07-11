import React,{useContext} from 'react'
import {authContext} from '../Components/Context.jsx'
import WishlistHeartIcon from '../assets/Images/CommonImg/WishlistHeartIcon.svg'
const AllProductsPage = () => {
    const {data,category,addProductToWishlist,addItemToCart,cartItem} = useContext(authContext); 
  return (
    <>
    <div className="allPagesDiv">
     <h2 align="center">All Products</h2>
        <div className="productDiv">
    {
      data.map((product,ind)=>{
return(
  <>
  <div className="cards" key={ind}>
      <img src={product.image} alt="" style={{height:'100px',width:'160px'}}/>
        <h3 style={{marginTop:'15px'}}>{product.title.slice(0,40)}...</h3> 
         <p  style={{marginTop:'10px',fontSize:'17px'}}>{product.description.slice(0,70)}...</p> 
          <div className="wishIcon" onClick={()=>addProductToWishlist(product.id)}><img src={WishlistHeartIcon} alt="" style={{marginTop:'3px'}} /></div>
             <h3 style={{marginTop:'7px'}}>Price : ${product.price}</h3> 
          <button className="AddToCartBtn" onClick={()=>addItemToCart(product.id)}>Add To Cart</button>
      </div>
  </>
)
      }
      )
    }
   </div>
    </div>

    </>
  )
}

export default AllProductsPage