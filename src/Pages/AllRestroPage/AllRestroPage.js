import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Atom/CustomButton";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./AllRestroPage.module.css";
export default function AllRestroPages() {
  const [list, setList] = useState([]);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("allRestroDetail")) {
      const allRestroData = JSON.parse(localStorage.getItem("allRestroDetail"));
      // console.log(allRestroData, "restro page pr all data of rstro aya kya ?");
      setList(allRestroData);
    }
  }, []);

  const handleClick = (x) => {
    // console.log(x, "single restro page");
    localStorage.setItem("clickedHotel", JSON.stringify(x));
    navigate("/singlerestropage");
  };
  function handleRating() {
    const ratingHotelList = JSON.parse(
      localStorage.getItem("allRestroDetail")
    ).filter((x) => x.data.avgRating >= 4);
    setList([...ratingHotelList]);
  }
  function handleVeg() {
    const vegHotel = JSON.parse(localStorage.getItem("allRestroDetail")).filter(
      (x) => x.data.veg === true
    );
    setList([...vegHotel]);
  }
  function handleNonVeg() {
    const vegHotel = JSON.parse(localStorage.getItem("allRestroDetail")).filter(
      (x) => x.data.veg === false
    );
    setList([...vegHotel]);
  }
  function handleReset() {
    setList(JSON.parse(localStorage.getItem("allRestroDetail")));
  }

  // console.log(sort, "srted");
  return (
    <>
      <NavBar />
      <div className={style.hotelMainBox} >
      <div className={style.btnBox}>
        <CustomButton
          className={style.btn}
          onClick={handleRating}
          buttonText="Rating 4+"
        />
        <CustomButton
          className={style.btn}
          onClick={handleVeg}
          buttonText="Veg Restaurants"
        />
        <CustomButton
          className={style.btn}
          onClick={handleNonVeg}
          buttonText="Non-Veg Restaurants"
        />
        <CustomButton
          className={style.btn}
          onClick={handleReset}
          buttonText="All Restaurants"
        />
      </div>
      {list[0]?.data.slugs.city ? (
        <p className={style.city}>
          {" "}
          ALL YOUR FAVOURITE RESTAURANTS IN{" "}
          {list[0]?.data.slugs.city.toUpperCase()}
        </p>
      ) : (
        ""
      )}
      <div className={style.main}>
        {list.map((x, i) => (
          <div onClick={() => handleClick(x)} className={style.card} key={i}>
            <div className={style.cardBox}>
              <div className={style.imgBox}>
                <img
                  className={style.img}
                  width="300px"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.data.cloudinaryImageId}`}
                  alt="hotel_picture"
                />
              </div>

              <div>
                <div className={style.hotelName}>
                  <h3>{x.data.name}</h3>
                </div>

                <div className={style.mainFotter}>
                  <div className={style.cuisinesWrap}>
                    {x.data.cuisines.slice(0, 4).map((y) => (
                      <span key={y} className={style.cuisines}>
                        {y},
                      </span>
                    ))}
                  </div>

                  <div className={style.avgPriceWrap}>
                    <span
                      className={
                        Number(x.data.avgRating) < 4
                          ? style.avgRating
                          : style.avgRatingTwo
                      }
                    >
                      <AiFillStar /> {x.data.avgRating}
                    </span>
                    <span className={style.price}>{x.data.slaString}</span>
                    <span className={style.price}>
                      {x.data.costForTwoString}
                    </span>
                  </div>

                  <div className={style.offers}>
                    <CiPercent className={style.iconPercent} />
                    <span>
                      {
                        x.data.aggregatedDiscountInfo?.shortDescriptionList[0]
                          .meta
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
}
