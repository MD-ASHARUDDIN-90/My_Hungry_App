import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import cityHotelListFetch from "../../FetchData/cityHotelListFetch";
import style from "./PredictedPlace.module.css";
export default function PredictedPlace({ predictedPlace }) {
  const navigate = useNavigate();
  async function handleClick(x) {
    //=================
    const data = await cityHotelListFetch(x);
    console.log(data, "geeting from all hoten in predicted place");

    localStorage.setItem("allRestroDetail", JSON.stringify(data));
    navigate("/restaurant");
  }
  return (
    <>
      {predictedPlace?.map((x) => (
        <div
          key={x.place_id}
          onClick={() => handleClick(x)}
          className={style.placesList}
        >
          <SlLocationPin className={style.placesListIcon} />

          <p className={style.listRow}>{x?.description}</p>
        </div>
      ))}
    </>
  );
}
