import React, { useEffect, useState } from "react";
import "../App.css";
import logo from "../images/logo.png";
import icon from "../images/lightsaber.png";

const Modal = ({ setOpenLogin}) => {
  const [user,setUser]=useState("")

  useEffect(() => {
    const storedUser = window.localStorage.getItem("User");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const closeLogin = () => {
    setOpenLogin(false);
  };

  const saveUser = (user) => {
    setUser(user);
    window.localStorage.setItem("User", user);
  }
  
  return (
    <>
      <main className="modal">
        <section className="panell">
          <div className="header-login">
           <img src={logo} alt="" width="160px" />
           <img src={icon} className="close" onClick={closeLogin}/>
          </div>
          <p className="text-login">ENTER YOUR USERNAME</p>
          <input type="text" placeholder={"Username"} onChange={(e)=>saveUser(e.target.value)} value={user}/>
        </section>
      </main>
    </>
  );
};

export default Modal;