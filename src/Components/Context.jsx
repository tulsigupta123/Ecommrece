import React,{useState,useEffect, createContext} from 'react'
import axios from 'axios'
export const authContext = createContext();
 import {toast } from 'react-toastify';
const Context = ({children}) => {
     const [data,setData] = useState([]);
  const [category,setCategory] = useState([]);
  const [wishlistItem, setWishlistItem] = useState([]);
 const [cartItem, setCartItem] = useState([]);
  const getData = async() =>{
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      if(response){
        setData(response.data);
        const categories = response.data.map((item,ind)=>item.category);
        const uniqueCategories = [...new Set(categories)];
        setCategory(uniqueCategories);
      }else{
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getData();
  },[]);

  const addProductToWishlist = async (prodId)=>{
    let existingProduct = wishlistItem.find((prod,ind)=>prod == prodId);
    if(existingProduct){
      toast.error("Product already present in your wishlist");
      return;
    }
    let updatedProduct = [...wishlistItem,prodId];
    setWishlistItem(updatedProduct);
  localStorage.setItem('wishlistItem',updatedProduct);
   toast.success("Product added in your wishlist");
  }

  const deleteProductFromWishlist = async (prodId)=>{
    let updatedProduct = wishlistItem.filter((prod,ind)=>prod != prodId);
    setWishlistItem(updatedProduct);
    localStorage.setItem('wishlistItem',updatedProduct);
     toast.success("Product deleted in your wishlist");
  }

  const addItemToCart = async (prodId)=>{
    let existingProduct = cartItem.find((prod,ind)=>prod == prodId);
    if(existingProduct){
      toast.error("Product is already in your cart");
      return;
    }
 const updatedItem = [...cartItem,prodId];
 setCartItem(updatedItem);
 localStorage.setItem('cartItem',updatedItem);
    toast.success("Product added in your cart");
  }

  const deleteItemFromCart = async (prodId) =>{
    const updatedCartItems = cartItem.filter((prod,ind)=>prod != prodId);
    setCartItem(updatedCartItems);
    localStorage.setItem('cartItem',updatedCartItems);
    toast.success("Product deleted from the cart")
  }
  return (
    <>
<authContext.Provider value={{data,setData,category, setCategory,addProductToWishlist,deleteProductFromWishlist,wishlistItem,addItemToCart,cartItem,deleteItemFromCart}}>
    {children}
</authContext.Provider>
    </>
  )
}

export default Context