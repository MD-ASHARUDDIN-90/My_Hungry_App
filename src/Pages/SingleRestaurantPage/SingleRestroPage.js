import { useEffect, useState } from "react";
import { AiFillStar, AiTwotoneStar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./SingleRestro.module.css";
export default function SingleRestroPage() {
  const [name, setName] = useState("Welcome To Hungry");
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [starRating, setStarRating] = useState("");
  const [area, setArea] = useState("");
  const [costTwo, setCostTwo] = useState("");
  const [deleveryTime, setDeliveryTime] = useState("");
  const [discount, setDiscount] = useState([]);
  const [all, setAll] = useState([]);

  const clickRestro = JSON.parse(localStorage.getItem("clickedHotel"));
  const latitude = JSON.parse(localStorage.getItem("latitude"));
  const longitude = JSON.parse(localStorage.getItem("longitude"));
  console.log(clickRestro.data.id, "singleRestro");
  const restaurantId = clickRestro.data.id;

  async function fetchClickRestro() {
    const res = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const data = await res.json();
    console.log(data, "sigle hotem all menu"); //
    console.log(data.data.cards[0].card.card.info, "info"); //info of restro
    setName(data.data.cards[0].card.card.info.name);
    setImg(data.data.cards[0].card.card.info.cloudinaryImageId);
    setCity(data.data.cards[0].card.card.info.city);
    setArea(data.data.cards[0].card.card.info.areaName);
    setRating(data.data.cards[0].card.card.info.totalRatingsString);
    setDiscount(
      data.data.cards[0].card.card.info.aggregatedDiscountInfo.descriptionList
    );
    setStarRating(data.data.cards[0].card.card.info.avgRating);
    setCostTwo(data.data.cards[0].card.card.info.costForTwoMessage);
    setDeliveryTime(data.data.cards[0].card.card.info.sla.deliveryTime);
    console.log(
      data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards,
      "mapping",
      "food original"
    );
    setAll(data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards); // try for all card
  }
  useEffect(() => {
    fetchClickRestro();
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.restroInfo}>
        <img
          className={style.restroImg}
          width=""
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${img}`}
          alt="hotel pic"
        />
        <div className={style.restroName}>
          <h1>{name}</h1>
          <h2>{area} </h2>
          <h2>{city}</h2>
        </div>
        <div className={style.rating}>
          <h2>
            <AiTwotoneStar className={style.icon} />
            {starRating}
          </h2>
          <h2>Total Rating : {rating}</h2>
          <h3>Cost {costTwo}</h3>
          <h3>DeliverY Time {deleveryTime} mins</h3>
        </div>
        <div>
          <h1 className={style.offerTxt}>Offers</h1>
          <div className={style.offer}>
            {discount.map((x) => (
              <div>{x.meta}</div>
            ))}
          </div>
        </div>
      </div>
      {all?.map((x) => (
        <div className={style.main}>
          {x.card.card.itemCards?.map((y) => (
            <div className={style.card}>
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
                  &#x20B9; {Number(y.card.info.price) / 100}
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
            </div>
          ))}
        </div>
      ))}
      <Footer />
    </>
  );
}

//===================//Rough data destructure//=============//
