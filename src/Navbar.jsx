import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const [dropDown, setDropDown] = useState(false)
    return ( 
        <div className="navbar">
            <h3 className="navbar__logo">Biccas</h3>
            <div className="navbar__links">
                <h3 className="navbar__links__item navbar__links__item--active">Home</h3>
                <h3 className="navbar__links__item">Product</h3>
                <h3 className="navbar__links__item">FAQ</h3>
                <h3 className="navbar__links__item">Blog</h3>
                <h3 className="navbar__links__item">About Us</h3>
            </div>
            <div className="navbar__right">
                <h3 className="navbar__right__login">login</h3>
                <h3 className="navbar__right__signup">Sign Up</h3>
            </div>
            <div className={`navabr__burger ${dropDown?'navabr__burger-active':''}`} onClick={async ()=>{
                if(dropDown){
                    let ele = document.getElementById('nav-drop')
                    ele.classList.add('leave-animation')
                    await sleep(200)
                    setDropDown(!dropDown)
                    ele.classList.remove('leave-animation')
                }
                else{
                    setDropDown(!dropDown)
                }
                
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`navbar__dropdown ${dropDown?'navbar__dropdown-active':''}`} id="nav-drop">
                <h3 className="navbar__dropdown__item navbar__dropdown__item-active">Home</h3>
                <h3 className="navbar__dropdown__item">Product</h3>
                <h3 className="navbar__dropdown__item">FAQ</h3>
                <h3 className="navbar__dropdown__item">Blog</h3>
                <h3 className="navbar__dropdown__item">About us</h3>
                <h3 className="navbar__dropdown__item">Login</h3>
                <h3 className="navbar__dropdown__item navbar__dropdown__item-sign">Sign Up</h3>
            </div>
        </div> 
    );
}
 
export default Navbar;