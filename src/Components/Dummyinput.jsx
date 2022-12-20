import React, { useState } from "react";

function Dummyinput() {
  const [signupinput, setsignupinput] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, seterror] = useState("");

  function handlechange(e) {
    setsignupinput({
      ...signupinput,
      [e.target.name]: e.target.value,
    });
  }
  function handleclick(e) {
    e.preventDefault();
    if (signupinput.password.length > 5) {
      return seterror("the password is in valid");
    }
  }
  return (
    <div>
      learn react
      <form>
        {" "}
        <label htmlFor="email"> Email adress</label>
        <input
          id="email"
          type="email"
          name="email"
          value={signupinput.email}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={signupinput.password}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="confirmpassword">confirmpassword</label>
        <input
          id="confirmpassword"
          type="password"
          name="confirmpassword"
          value={signupinput.confirmpassword}
          onChange={(e) => handlechange(e)}
        />
        <button onClick={handleclick}>submit</button>
        {error && <p> {error} </p>}
      </form>
    </div>
  );
}

export default Dummyinput;
