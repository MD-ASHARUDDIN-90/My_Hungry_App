import { SlLocationPin } from "react-icons/sl"
import { useNavigate } from "react-router-dom"
import cityHotelListFetch from "../../FetchData/cityHotelListFetch"
import style from './PredictedPlace.module.css'
export default function PredictedPlace({predictedPlace}) {
    const navigate = useNavigate()
    async function handleClick(x) {
        //=================
     const data = await  cityHotelListFetch(x)
        console.log(data,"geeting from all hoten in predicted place")
        //===================
//         console.log(x,"i m selectd place")
      
//  const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${x.place_id}`)
//         const data = await res.json()  //{}

//      const latitude =    data.data[0].geometry.location.lat
//       const longitude = data.data[0].geometry.location.lng
// console.log(latitude,"geo")
//       const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`)
//       const fetchData = await response.json()
//       console.log(fetchData.data?.cards[2].data?.data?.cards , "restaurant data")
    //   localStorage.setItem("allRestroDetail" ,JSON.stringify(fetchData.data?.cards[2].data?.data?.cards))
      localStorage.setItem("allRestroDetail" ,JSON.stringify(data))
      navigate('/restaurant')
    }
    return(
        <>
       
        {
            predictedPlace?.map(x=>
            <div key={x.place_id} onClick={()=>handleClick(x)} className={style.placesList}>
            <SlLocationPin className={style.placesListIcon}/>
       
            <p className={style.listRow}>{x?.description}</p>
     
            </div>
            )
        }
       
        </>
    )
}