import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";

const initialData = {
  email: "",
  password: ""
};

function Navbar() {
  const [isAuth, handleToggle] = useContext(AppContext);
  const [formData, setFormdData] = useState(initialData);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormdData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>
        <input
          name="email"
          type="input"
          placeholder="enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="password"
          type="text"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
      </div>
      {isAuth ? (
        <button onClick={() => handleToggle()}>Sign Out</button>
      ) : (
        <button onClick={(e) => handleToggle(e, formData)}>Sign In</button>
      )}
    </>
  );
}

export default Navbar;
