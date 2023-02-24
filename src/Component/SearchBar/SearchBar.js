import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import CustomButton from "../../Atom/CustomButton";
import CustomInput from "../../Atom/CustomInput";
import style from "./SearchBar.module.css";
import placeFetch from "../../FetchData/placeFetch";
import locateFetchData from "../../FetchData/locationFetchData";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setPredictedPlace }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  async function captureValue(e) {
    setSearch(e.target.value);
    const data = await placeFetch(e.target.value);
    console.log(data, "geet from srchbar");
    setPredictedPlace(data.data);
  }
  //======================locatte me function (location fetch data)=================//
  async function showPosition(position) {
    const coordinates = [position.coords.latitude, position.coords.longitude];
    const data = await locateFetchData(coordinates) ;
    localStorage.setItem("allRestroDetail", JSON.stringify(data));
    navigate("/restaurant");
  }
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  //===================================================================================//
  return (
    <>
      <CustomInput
        value={search}
        onChange={captureValue}
        placeholder="Enter Your Delivery Location"
        className={style.input}
      />

      <div onClick={handleLocation} className={style.locate}>
        <TbCurrentLocation /> <p> Locate Me</p>
      </div>

      <CustomButton className={style.btn1} buttonText="Find Food" />

      {}
    </>
  );
}
