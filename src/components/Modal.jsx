import React, { useRef, useEffect } from "react";
import "../App.css";
import logo from "../images/logo.png";
import icon from "../images/lightsaber.png";

const Modal = ({ setOpenLogin}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("User");
    if (storedUser) {
      inputRef.current.value = storedUser;
    }
  }, []);

  const closeLogin = () => {
    setOpenLogin(false);
  };

  const register = () => {
    const user = inputRef.current.value;
    window.localStorage.setItem("User", user);
  };

  return (
    <>
      <main className="modal">
        <section className="panell">
          <div className="header-login">
            <img src={logo} alt="" width="160px" />
            <img src={icon} className="close" onClick={closeLogin} alt=""/>
          </div>
          <p className="text-login">ENTER YOUR USERNAME</p>
          <input type="text" placeholder={"Username"} ref={inputRef} />
          <button onClick={register}>Register</button>
        </section>
      </main>
    </>
  );
};

export default Modal;