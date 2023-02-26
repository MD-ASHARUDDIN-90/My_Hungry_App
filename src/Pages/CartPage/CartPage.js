import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import CustomButton from "../../Atom/CustomButton";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./CartPage.module.css";
import { cartItem } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
export default function CartPage() {
  const [carts, setCarts] = useRecoilState(cartItem);

  const [list, setList] = useState(carts);
  let sum = 0;
  for (let i = 0; i < carts.length; i++) {
    sum = sum + carts[i].card.info.price;
  }
  const [price, setPrice] = useState(sum / 100);
  console.log(carts, "recoil cart");

  function handleDelete(y) {
    const newItem = list.filter(
      (x) => x.card.info.imageId !== y.card.info.imageId
    );
    setList(newItem);
    setCarts(newItem);
    setPrice(price - y.card.info.price / 100);
  }

  return (
    <>
      <NavBar />
      <div>
        <div className={style.main}>
          <h2>Your Cart Items...</h2>
          <div
            style={{ border: "1px solid", width: "70%", paddingLeft: "2rem" }}
          >
            {list.map((y, i) => (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <div style={{ display: "flex", gap: "3rem", width: "60%" }}>
                    {y.card.info.imageId ? (
                      <img
                        className={style.img}
                        width="30px"
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${y.card.info.imageId}`}
                        alt="dishes"
                      />
                    ) : (
                      <img
                        className={style.img}
                        width="20px"
                        src="https://static.vecteezy.com/system/resources/previews/000/428/795/original/fast-food-icon-vector.jpg"
                        alt="dummyImage"
                      />
                    )}{" "}
                    <span>{y.card.info.name}</span>
                  </div>

                  <p>
                    {" "}
                    &#x20B9;{" "}
                    {!y.card.info.price
                      ? Number(y.card.info.defaultPrice) / 100
                      : Number(y.card.info.price) / 100}
                  </p>
                  <button onClick={() => handleDelete(y)}>Remove</button>
                </div>
              </>
            ))}
            <div className={style.priceTotal}>
              <h2>Total Price : </h2>
              <h2>&#x20B9; {price}</h2>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
