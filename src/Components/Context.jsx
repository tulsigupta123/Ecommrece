import React,{useState,useEffect, createContext} from 'react'
import axios from 'axios'
export const authContext = createContext();
const Context = ({children}) => {
     const [data,setData] = useState([]);
  const [category,setCategory] = useState([]);
  const [wishlistItem, setWishlistItem] = useState([]);

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
    let updatedProduct = [...wishlistItem,prodId];
    setWishlistItem(updatedProduct);
  localStorage.setItem('wishlistItem',updatedProduct);
  }

  const deleteProductFromWishlist = async (prodId)=>{
    let updatedProduct = wishlistItem.filter((prod,ind)=>prod != prodId);
    setWishlistItem(updatedProduct);
    localStorage.setItem('wishlistItem',updatedProduct);
  }
  return (
    <>
<authContext.Provider value={{data,setData,category, setCategory,addProductToWishlist,deleteProductFromWishlist,wishlistItem}}>
    {children}
</authContext.Provider>
    </>
  )
}

export default Context