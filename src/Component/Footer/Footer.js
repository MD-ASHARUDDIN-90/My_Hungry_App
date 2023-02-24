import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { IoFastFoodOutline } from 'react-icons/io5'
import style from './Footer.module.css'
export default function Footer(){
    return(
        <>
        <div className={style.footer}>
        <div className={style.footerContact}>
        <div>
        <h3>COMPANY</h3>
        <p>About us</p>
        <p>Team</p>
        <p>Careers</p>
        <p>Swiggy Blog</p>
        <p>Bug Bounty</p>
        <p>Swiggy One</p>
        <p>Swiggy Corporate</p>
        <p>Swiggy Instamart</p>
        <p>Swiggy Genie</p>
        </div>

        <div>
        <h3>CONTACT</h3>
        <p>Help & Support</p>
        <p>Partner with us</p>
        <p>Ride with us</p>
        </div>

        <div>
        <h3>LEGAL</h3>
        <p>Terms & Conditions</p>
        <p>Refund & Cancellation</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Offer Terms</p>
        <p>Phishing & Fraud</p>
        <p>Corporate – Swiggy Money Codes Terms and Conditions</p>
        <p>Corporate - Swiggy Discount Voucher Terms and Conditions</p>
        </div>

        <div className={style.footerGoogleApphoto}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="54px"/>
        
        <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" height="54px"/>
        </div>

        </div>

        <div>
        
        </div>
        </div>

        <div className={style.footerLastMain}>

        <div className={style.seperation}> </div>
        <div className={style.footerLast}>

        <div className={style.iconTab}>
        <IoFastFoodOutline className={style.icon}/>
        <h1 >Hungry</h1>
        </div>

        <div className={style.footerLasttext}>
        &#169;
        {new Date().getFullYear()} 
        &nbsp; Hungry
        </div>


      

        <div className={style.footerIconWrap}>
        <FiFacebook className={style.footerLastIcon}/>
        <FaPinterestP className={style.footerLastIcon} />
        <BsInstagram className={style.footerLastIcon} />
        <BsTwitter className={style.footerLastIcon} />
        
        </div>

        </div>
        </div>
        </>
    )
}