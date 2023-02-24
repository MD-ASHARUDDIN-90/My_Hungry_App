import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CustomInput from "../../Atom/CustomInput";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import foodDataFetch from "../../FetchData/foodDataFetch";
import { images } from "../../Fixture/SearchPageCuisinesImages";
import style from "./SearchFoodPage.module.css";
export default function SearchFoodPage() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  async function captureValue(e) {
    setValue(e.target.value);
    let predictedFood = await foodDataFetch(e.target.value);
    console.log(predictedFood.data.suggestions, "searchPge");
    setList(predictedFood.data?.suggestions);
  }
  return (
    <>
      <NavBar />
      <div className={style.main}>
        <div className={style.inputBox}>
          <CustomInput
            value={value}
            onChange={captureValue}
            className={style.input}
            placeholder="Search for restaurant and food"
          />
          <FiSearch className={style.iconSearch} />
        </div>

        <div>
          <h1>Popular Cuisines</h1>
        </div>

        {!value ? 
        <div className={style.imagesList}>
          {images.map((x, i) => (
            <img
              className={style.images}
              width=""
              src={x.image}
              alt="food pic"
            />
          ))}
        </div>
        
          :

        <div className={style.foods}>
          {list.map((x, i) => (
            <>
              <div className={style.foodList} key={i}>
                <img
                  className={style.imagesSeacrh}
                  width="65px"
                  height="65px"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x.cloudinaryId}`}
                  alt="dishes"
                />
                <div>
                  <p  className={style.imagesSeacrhText}>{x.text}</p>
                  <p className={style.imagesSeacrhSubCategory}>{x.subCategory}</p>
                </div>
              </div>
            </>
          ))}
        </div>

          }
      </div>
      <Footer />
    </>
  );
}
