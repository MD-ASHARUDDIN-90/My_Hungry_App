import { useEffect, useState } from "react";
import { AiFillStar, AiTwotoneStar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import CustomButton from "../../Atom/CustomButton";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./SingleRestro.module.css";
import { cartItem } from "../../Recoil/Recoil";
import { useSetRecoilState } from "recoil";
export default function SingleRestroPage() {
  const [name, setName] = useState("Welcome To Hungry");
  const [restroInfo, setRestroInfo] = useState({});
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [starRating, setStarRating] = useState("");
  const [area, setArea] = useState("");
  const [costTwo, setCostTwo] = useState("");
  const [deleveryTime, setDeliveryTime] = useState("");
  const [discount, setDiscount] = useState([]);
  const [all, setAll] = useState([]);
  const [cart, setCart] = useState([]);
  const setCartList = useSetRecoilState(cartItem); //n

  const clickRestro = JSON.parse(localStorage.getItem("clickedHotel"));
  const latitude = JSON.parse(localStorage.getItem("latitude"));
  const longitude = JSON.parse(localStorage.getItem("longitude"));
  // console.log(clickRestro.data.id, "singleRestro");
  const restaurantId = clickRestro.data.id;

  async function fetchClickRestro() {
    const res = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const data = await res.json();
    // console.log(data, "sigle hotem all menu"); //
    // console.log(data.data.cards[0].card.card.info, "info"); //info of restro
    //==============================================//
    setRestroInfo({
      name : data.data.cards[0].card.card.info.name,
      img : data.data.cards[0].card.card.info.cloudinaryImageId,
      city : data.data.cards[0].card.card.info.city,
      area : data.data.cards[0].card.card.info.areaName,
      rating : data.data.cards[0].card.card.info.totalRatingsString,
      discount : data.data.cards[0].card.card.info.aggregatedDiscountInfo.descriptionList,
      startRating : data.data.cards[0].card.card.info.avgRatingString,
      costTwo : data.data.cards[0].card.card.info.costForTwoMessage,
      deleveryTime : data.data.cards[0].card.card.info.sla.deliveryTime
    })
  
   
    // console.log(
    //   data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards,
    //   "mapping",
    //   "food original"
    // );
    setAll(data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards); // try for all card
  }
  useEffect(() => {
    fetchClickRestro();
    // eslint-disable-next-line
  }, []);

  function handleClick(y) {
    if (!y.isAdd) {
      y.isAdd = true;
      // console.log(y, "cart item added");
      cart.push(y);
      setCart([...cart]);
      setCartList([...cart]);
    }
  }
  // console.log(cart, "added cart items");
  return (
    <>
      <NavBar cart={cart} />
      {
        //==============restro info============//
      }
      <div className={style.restroInfo}>
        <img
          className={style.restroImg}
          width=""
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restroInfo.img}`}
          alt="hotel pic"
        />
        <div className={style.restroName}>
          <h1>{restroInfo.name}</h1>
          <h2>{restroInfo.area} </h2>
          <h2>{restroInfo.city}</h2>
        </div>
        <div>
          <h1 className={style.offerTxt}>Offers</h1>
          <div className={style.offer}>
            {restroInfo.discount?.map((x, i) => (
              <div key={i}>{x.meta}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.rating}>
        <div>
          <AiTwotoneStar className={style.icon} />
          <span> {restroInfo.starRating}</span>
        </div>
        <p className={style.reviewRate}>{restroInfo.rating}</p>
        <p className={style.reviewRate}>Cost {restroInfo.costTwo}</p>
        <p className={style.reviewRate}>Delivery Time {restroInfo.deleveryTime} mins</p>
      </div>
      {
        //=============foods menu items=========================//
      }
      {all?.slice(0).map((x, i) => (
        <div key={i}>
          {x.card.card.title ? (
            <div key={i} className={style.section}>
              <h3>{x.card.card.title}</h3>
            </div>
          ) : (
            ""
          )}
          <div className={style.main}>
            {x.card.card.itemCards?.map((y,i) => (
              <div key={i} className={style.card}>
                {y.card.info.imageId ? (
                  <img
                    className={style.img}
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${y.card.info.imageId}`}
                    alt="dishes"
                  />
                ) : (
                  <img
                    className={style.img}
                    width="208px"
                    src="https://static.vecteezy.com/system/resources/previews/000/428/795/original/fast-food-icon-vector.jpg"
                    alt="dummyImage"
                  />
                )}
                <div>
                  <p className={style.head}>{y.card.info.name}</p>
                  <p className={style.head}>
                    &#x20B9;{" "}
                    {!y.card.info.price
                      ? Number(y.card.info.defaultPrice) / 100
                      : Number(y.card.info.price) / 100}
                  </p>
                  <p className={style.green}>
                    <AiFillStar />
                    {y.card.info.ribbon.text}
                  </p>
                  <p className={style.bot}>
                    <MdCategory />
                    {y.card.info.category}
                  </p>
                  <p className={style.quant}>
                    {y.card.info.itemAttribute?.portionSize}
                  </p>
                </div>
                <CustomButton
                  onClick={() => handleClick(y)}
                  className={y.isAdd ? style.btn1 : style.btn}
                  buttonText={"Add Item"}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

//===================//=============
