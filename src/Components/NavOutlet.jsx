import React from 'react'
import ExclusiveLogo from '../assets/Images/HomeImg/ExclusiveLogo.svg'
import WishlistIcon from '../assets/Images/HomeImg/WishlistIcon.svg'
import cartIcon from '../assets/Images/HomeImg/cartIcon.svg'
import searchIcon from '../assets/Images/HomeImg/searchIcon.svg'

const NavOutlet = () => {
  return (
       <div className="flex items-center justify-around p-4" style={{backgroundColor:'#808023',padding:'8px 5px'}}>
    <div className="bg-grey-300 p-3">
      <img src={ExclusiveLogo} alt="Logo" />
    </div>
    <div className="ml-[80px]">
        <ul className="flex list-style-none ml-5" style={{listStyle:'none'}}>
            <li style={{marginRight:'18px',fontSize:'17px'}}>
                Home
            </li>

             <li style={{marginRight:'18px',fontSize:'17px'}}>
                About
            </li>
             <li style={{marginRight:'18px',fontSize:'17px'}}>
                All Products
            </li>
             <li style={{marginRight:'18px',fontSize:'17px'}}>
                Signup
            </li>
        </ul>
    </div>
    <div className="ml-[130px]" style={{position:'relative'}}>
        <input type="search" name="" id="" placeholder="What are you looking for?" style={{height:'38px',width:'243px',marginRight:'10px',padding:'3px',borderRadius:'4px',outline:'none',border:'none'}}/>
    <img src={searchIcon} alt="" style={{height:'16px',width:'16px',position:'absolute',top:'10px',right:'17px'}}/>
    </div>
      <div className="ml-[80px]">
  <img src={WishlistIcon} alt="" className="h-5 w-5" style={{height:'21px',width:'21px',marginRight:'14px'}}/>
  <img src={cartIcon} alt="" className="h-5 w-5" style={{height:'24px',width:'24px'}}/>
    </div>
   </div>
  )
}

export default NavOutlet