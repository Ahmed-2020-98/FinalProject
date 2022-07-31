import React from 'react'
import './Footer.css'
import { FaApple,FaGooglePlay } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightSquareFill } from "react-icons/bs";
export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='container'>
            <div className='footerContent'>
                <div className='footerUpper'>
                    <div>
                        <h4>About Raya</h4>
                        <p>Who we are</p>
                        <p>Store Locator</p>
                        <p>Raya Installments</p>
                    </div>
                    <div>
                        <h4>Customer Support</h4>
                        <p>Live Chat</p>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h4>More</h4>
                        <p>Returns and Refund</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <h4>Download App</h4>
                        <p><FaGooglePlay className='FaApple fs-6'/>Google Play</p>
                        <p> <FaApple className='FaApple'/>  App Store</p>
                        
                    </div>
                    <div>
                        <h4>Stay in the know</h4>
                        <p>Subscribe to our newsletter</p>
                        
                        <p><MdOutlineEmail className='MdOutlineEmail'/><input type="text" className='inputFooter' placeholder='Email-(ex@gmail.com)'/> <BsArrowRightSquareFill className='BsArrowRightSquareFill'/></p>
                    </div>
                </div>
                <div className='footerLower'>footer lower</div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
