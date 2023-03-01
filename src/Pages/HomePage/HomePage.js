import HomeModal from "../../Component/HomeModal/HomeModal";
import style from './HomePage.module.css'
import Footer from "../../Component/Footer/Footer";
import { ImCross } from 'react-icons/im';
import { useEffect, useState } from "react";
export default function HomePage(){
    const [show , setShow] = useState(false)

      
    
 
   
    function handleCross() {
       setShow(true)
    }
    return(
        <>
        {!show ? <div className={style.warning}><><h3>You have to enable "CORS" Extension in google chrome to run everything smoothly... </h3 > <ImCross onClick={handleCross}/></> </div>: ""}
        <div className={style.up}>
        <HomeModal />
        <div>
        <img className={style.imageback} width="680px" height="553px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
        </div>
        </div>

        <div className={style.liveOrderTrack}>
        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="thumbsUp" width= "105px" height="199px" />
        <h3>No Minimum Order</h3>
        <p>Order in for yourself or for the group,</p> <p>with no restrictions on order value</p>
        </div>

        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="liveOrder" width= "105px" height="199px"/>
        <h3>Live Order Tracking</h3>
        <p>Know where your order is at all times, </p> <p > from the restaurant to your doorstep </p>
        </div>

        <div className={style.liveOrderTrackSubBox}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="liveOrder" width= "105px" height="199px"/>
        <h3>Lightning-Fast Delivery</h3>
        <p> Experience Swiggy's superfast delivery </p>
        <p> for food delivered fresh & on time</p>
        </div>
    
        </div>


        <div>

        <div className={style.app}>

        <div className={style.googleApp}>

        <div>
        <h1>
        Restaurants in your pocket
        </h1>
        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
        </div>

        <div className={style.googleApphoto}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" height="54px"/>
        
        <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" height="54px"/>
      
        </div>

        </div>

        <div className={style.mobile}>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" width="384px" height="489px"/>
        <img className={style.mobileTwo} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" width="384px" height="489px"/>
        
        </div>

        </div>
        
        </div>

       <Footer />

        </>
    )
}