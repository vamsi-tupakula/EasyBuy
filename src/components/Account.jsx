import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../features/productsSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../app/Firebase";
import { useNavigate } from "react-router-dom";

function Account() {
  const userId = useSelector((state) => state.products.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    dispatch(updateUserDetails(null));
    signOut(auth);
    navigate("/");
  };

  return (
    <div
      className="account flex flex-col"
      style={{ gap: "20px", margin: "20px 0" }}
    >
      <h1>Account Details</h1>
      <p>Your Id : {userId}</p>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Account;
