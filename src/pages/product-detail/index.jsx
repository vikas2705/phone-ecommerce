import React, { useState } from 'react'
import "./productDetail.css"


    import {BiUpArrow} from "react-icons/bi"
    import {BiDownArrow} from "react-icons/bi"
import { AiFillCheckCircle } from 'react-icons/ai';
import redmiphone from "../../common/assets/images/Bitmap.png"
import Cal from "../../common/assets/images/Component 1.png"
import Rangoli from "../../common/assets/images/rangoli.png"
import Cart from "../../common/assets/images/cart.png"
import Truck from "../../common/assets/images/truck.png"
import Return from "../../common/assets/images/return shape.png"
import Checked from "../../common/assets/images/checked.png"
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import Footer from "../../common/components/footer";




function ProductDetail() {
    const [isActive, setIsActive] = useState(false);


    const handleClick = event => {
        event.currentTarget.classList.toggle('PDcolorSelected');
      };


  return (
    <>
    <Header />
    <NavbarMain />
    
   
        <div className='slash'>Home /  <span className='PDcompanyName'> Samsung /</span> Mobile Phone / 
        <span className='PDmodelName'> Galaxy Note 2</span>
        </div>
        <div className='PDmobileInfoContainer'>
            <div className='PDviewDifferentImages'>
             <button className='PDarrowBtn'><span className='PDarrowUpBtn'><BiUpArrow className='PDUP'/></span></button>
           <div className='PDsmallImgContainer'>  <img src={redmiphone} className='PDsmallImages' alt='error'/>
           </div>
           <div className='PDsmallImgContainer'>  <img src={redmiphone} className='PDsmallImages' alt='error' />
           </div>
           <div className='PDsmallImgContainer'>  <img src={redmiphone} className='PDsmallImages' alt='error'  />
           </div>
           <div className='PDsmallImgContainer'>  <img src={redmiphone} className='PDsmallImages'  alt='error'/>
           </div>
           <div className='PDsmallImgContainer'>  <img src={redmiphone} className='PDsmallImages' alt='error' />
           </div>
             <button className='PDarrowBtn'><BiDownArrow className='PDUP'/></button>
             

            </div>
            <div className='PDviewMainImage'>
                <img  src='https://images.pexels.com/photos/10227348/pexels-photo-10227348.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='error'></img>
            </div>
            <div className='PDallInfoAboutMobile'>
                <div className='PDmobileName'>Samsung Galaxy Note 8(Orchid Grey,6 GB, RAM 64 GB Storage)</div>
             <div className='PDkeyFeatures'>
                <p className='PDfeaturesHeading'>key features</p>
                <p className='PDallFeatures'><span className='PDtickArrow'> <AiFillCheckCircle  className="PDarrowIcon"/></span> Capacity 6 kg :Suitable for bachelors & couples</p>
                <p className='PDallFeatures'><span className='PDtickArrow'> <AiFillCheckCircle className="PDarrowIcon" /></span> Warranty: 4 years on product, 4 years on motor </p>
                <p className='PDallFeatures'><span className='PDtickArrow'> <AiFillCheckCircle className="PDarrowIcon" /></span>  Higher the spin speed, faster the drying time</p>
             </div>   
             <div className='PDcircles'>
             <div className='PDchooseColor'>Choose Color</div>
            <div className='PDcolorOptions'>
                <div className={isActive ? 'PDcolorSelected PDcolorbox' : 'PDcolorbox'} onClick={handleClick}>
                    <div className='PDcolor color1'></div>
                    Charcol Black
                </div>
                <div className={isActive ? 'PDcolorSelected PDcolorbox' : 'PDcolorbox'} onClick={handleClick}>
                    <div className='PDcolor color2'></div>
                    Magnite Gray
                </div>
                <div className={isActive ? 'PDcolorSelected PDcolorbox' : 'PDcolorbox'} onClick={handleClick}>
                    <div className='PDcolor color3'></div>
                    Classic Blue
                </div>
                <div className={isActive ? 'PDcolorSelected PDcolorbox' : 'PDcolorbox'} onClick={handleClick}>
                    <div className='PDcolor color4'></div>
                    White
                </div>
                <div className={isActive ? 'PDcolorSelected PDcolorbox' : 'PDcolorbox'} onClick={handleClick}   >
                    <div className='PDcolor color5'></div>
                     Silver
                </div>
            </div>
             </div>
             <div className='PDselectQuantity'>Select Quantity
             <div className='PDQuantitySelect'>
                    <select name="sortby" id="PDsortbyNum">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>               
    </div>
             </div>
             <div className='PDprices'>
                <span className='PDactualPrice'>&#8377;20,990</span><span className='PDcutPrice'>&#8377;23,990</span><span className='PDoffer'>10% off</span>
                <p className='PDpricesP'>Inclusive of all taxes</p>
             </div>
             <div className='PDEMIparas'>
                <p className='PDEMI'><span className='PDparaImage'><img src={Cal} alt='error' /></span>No cost EMI ₹1,750/month. Standard EMI also available. T&C </p>
                <p className='PDEMI'><span  className='PDparaImage'><img src={Rangoli} alt='error'/></span>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. T&C </p>
             </div>
             <div className='PDcartButton'>
                <button className='PDaddToCart'><img src={Cart} alt='error' /> <span className='PDbtnText'>Add to cart</span></button>
             </div>
             <div className='PDinfoLast'> 
             <div className='PDfreeShipping PDLAST'><img src={Truck} alt="error" /> 
             <span className="PDlastSpan "> Shipping Fee <br /><strong className='PDlastBold'>FREE</strong></span></div>
             <div className='PDreturn PDLAST'>
                <img src={Return} alt="error" />Return Policy <br />
                <strong className='PDlastSpan PDlastBold'>30 Days</strong>
             </div>
             <div className='PDcancelAllowed PDLAST'>
                <img src={Checked} alt="error" />
                Cancellation <br />
                <strong className='PDlastSpan PDlastBold'>Allowed</strong> 
             </div>
             </div>
            
            </div>
            <div className='PDshareBtnDIV'>
                <button className='PDsharebtn'>Share</button>
            </div>
        </div>
      <Footer />
   
       
    </>
  )
}

export default ProductDetail