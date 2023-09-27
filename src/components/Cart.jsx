import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../../app/Firebase";
import { useSelector } from "react-redux";

function Cart() {
  const [cart, setCart] = useState(null);
  const userId = useSelector((state) => state.products.userId);

  useEffect(() => {
    async function getDetails() {
      const ref = doc(firestore, "users", userId);
      const data = await getDoc(ref);
      setCart(data.data().cart);
    }
    getDetails();
  }, []);

  return (
    <div className="cart flex flex-col" style={{ padding: "20px 0" }}>
      {!cart ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {cart.length === 0 ? (
            <h1>Your cart is empty..</h1>
          ) : (
            <ul className="items">
              {cart.map((item) => {
                return <h1 key={item}>Item Id : {item}</h1>;
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
