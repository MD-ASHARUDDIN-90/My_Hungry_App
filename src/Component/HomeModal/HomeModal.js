import { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import CustomButton from "../../Atom/CustomButton";
import style from "./HomeModal.module.css";
import SearchBar from "../SearchBar/SearchBar";
import PredictedPlace from "../PredictedPlaces/PredictedPlaces";
export default function HomeModal() {
  const handleLogin = () => {
    alert("This feature will be added soon....");
  };
  const handleSignUp = () => {
    alert("This feature will be added soon....");
  };
  const [predictedPlace, setPredictedPlace] = useState([]);
  return (
    <>
      <div className={style.main}>
        <div className={style.mainHead}>
          <div className={style.iconTab}>
            <IoFastFoodOutline className={style.icon} />
            <h1>Hungry</h1>
          </div>

          <div>
            <CustomButton
              onClick={handleLogin}
              className={style.btn}
              buttonText="Login"
            />
            <CustomButton
              onClick={handleSignUp}
              className={style.btnSign}
              buttonText="Sign up"
            />
          </div>
        </div>

        <div className={style.content}>
          <div className={style.midContent}>
            <h1>Are you Hungry ?</h1>
            <h2>Order food from favourite restaurants near you.</h2>

            <div className={style.inputBar}>
              <SearchBar setPredictedPlace={setPredictedPlace} />
            </div>
            {/* =====Pop over Predicted=====*/}

            <div className={style.popOver}>
              <PredictedPlace predictedPlace={predictedPlace} />
            </div>
          </div>

          <div className={style.footer}>
            <h3>POPULAR CITIES IN INDIA</h3>
            <h4>
              Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata <br />{" "}
              Mumbai Pune & more.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
