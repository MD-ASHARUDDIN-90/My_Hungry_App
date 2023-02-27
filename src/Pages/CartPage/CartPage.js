import { useState } from "react";
import CustomButton from "../../Atom/CustomButton";
import NavBar from "../../Component/NavBar/NavBar";
import style from "./CartPage.module.css";
import { cartItem } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import Footer from "../../Component/Footer/Footer";
export default function CartPage() {
  const [carts, setCarts] = useRecoilState(cartItem);
  const [list, setList] = useState(carts);
  let sum = 0;
  for (let i = 0; i < carts.length; i++) {
    if (carts[i].card.info.price) {
      sum = sum + carts[i].card.info.price;
    } else {
      sum = sum + carts[i].card.info.defaultPrice;
    }
  }
  const [price, setPrice] = useState(sum / 100);
  // console.log(carts, "recoil cart");

  function handleDelete(y, i) {
    const _carts = [...carts];
    _carts.splice(i, 1);
    setList([..._carts]);
    setCarts([..._carts]);
    setPrice(price - y.card.info.price / 100);
  }
  function handleCheckout() {
    price > 0
      ? alert(`Your order has been placed and your bill amount is ${price}/-Rs`)
      : alert(`Choose The Items First`);
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
                <div key={y.card.info.imageId} className={style.itemsBox}>
                  <div
                    className={style.items}
                    style={{ display: "flex", gap: "3rem", width: "60%" }}
                  >
                    {y.card.info.imageId ? (
                      <img
                        className={style.img}
                        width="40px"
                        height="30px"
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${y.card.info.imageId}`}
                        alt="dishes"
                      />
                    ) : (
                      <img
                        className={style.img}
                        width="30px"
                        height="30px"
                        src="https://static.vecteezy.com/system/resources/previews/000/428/795/original/fast-food-icon-vector.jpg"
                        alt="dummyImage"
                      />
                    )}{" "}
                    <span>{y.card.info.name}</span>
                  </div>

                  <p>
                    Cost : &#x20B9;{" "}
                    {!y.card.info.price
                      ? Number(y.card.info.defaultPrice) / 100
                      : Number(y.card.info.price) / 100}
                  </p>
                  <CustomButton
                    className={style.btn}
                    onClick={() => handleDelete(y, i)}
                    buttonText="Remove"
                  />
                </div>
              </>
            ))}
            <div className={style.priceTotal}>
              <h2>Total Price : </h2>
              <h2>&#x20B9; {price}</h2>
            </div>
          </div>
          <CustomButton
            onClick={handleCheckout}
            className={style.checkBtn}
            buttonText="Checkout"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
