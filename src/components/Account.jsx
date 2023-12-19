import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../features/productsSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../app/Firebase";
import { NavLink, useNavigate } from "react-router-dom";

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

  if (!userId) {
    return (
      <div
        className="account flex flex-col"
        style={{ gap: "20px", margin: "20px 0", padding: "2rem 0" }}
      >
        <h1 style={{ color: "red" }}>Please Login to see account details!</h1>
        <NavLink className="navlink btn" to={'/login'}>
          LOGIN
        </NavLink>
      </div>
    )
  }

  return (
    <div
      className="account flex flex-col"
      style={{ gap: "20px", margin: "20px 0" }}
    >
      <h1><span style={{ color: "green" }}>ACCOUNT ID:</span> {userId}</h1>
      <button className="btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
}

export default Account;
