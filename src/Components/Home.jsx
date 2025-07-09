import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BannerHome from '../assets/Images/HomeImg/BannerHome.svg'
import WishlistHeartIcon from '../assets/Images/CommonImg/WishlistHeartIcon.svg'
 import { toast } from 'react-toastify';

const Home = () => {
  const [data,setData] = useState([]);
  const [category,setCategory] = useState([]);

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
  return (
    <>
   <div className="flex items-center justify-around">
   <div className="flex flex-col homeCategoryDiv">
   <h2>Categories:</h2>
    <ul>
      {
category.map((product,index)=>(
  (
    <>
    <li key={index}>{product}</li>
    </>
  )
))
      }
      <li>Women's Fashion</li>
      <li>Men's Fashion</li>
      <li>Health & Beauty</li>
      <li>Men's Fashion</li>
    </ul>
   </div>
   <hr style={{height:'350px',width:'1px',color:'#D9D9D9',marginTop:'1px'}}/>
 <img src={BannerHome} alt="" style={{margin:'2px'}}/>
   </div>
   <hr style={{height:'1px',width:'100vw',color:'D9D9D9',marginTop:'10px'}}/>
   <div className="homeProducts">
   <div className="flex items-center justify-between" style={{padding:'1px 55px'}}>
    <h2>Best Selling Products</h2>
    <button style={{height:'46px',width:'110px',backgroundColor:'#E94747',border:'none',borderRadius:'4px',fontSize:'15px',fontWeight:'400',color:'white'}}>View All</button>
   </div>
   <div className="productDiv">
    {
      data.map((product,ind)=>(
      <div className="cards" key={ind}>
      <img src={product.image} alt="" style={{height:'100px',width:'160px'}}/>
        <h3 style={{marginTop:'15px'}}>{product.title.slice(0,40)}...</h3> 
         <p  style={{marginTop:'10px',fontSize:'17px'}}>{product.description.slice(0,70)}...</p> 
          <div className="wishIcon"><img src={WishlistHeartIcon} alt="" /></div>
          <button className="AddToCartBtn">Add To Cart</button>
      </div>
      ))
    }
   </div>
   </div>
    </>
  )
}

export default Home


