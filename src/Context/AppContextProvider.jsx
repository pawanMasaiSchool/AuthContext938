import axios from "axios";
import { useState } from "react";
const { createContext } = require("react");

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [isAuth, toggleAuth] = useState(false);
  const [token, setToken] = useState("");

  const fetchDetails = (body) => {
    return axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: body
    });
  };

  const handleToggle = (e, data) => {
    if (data) {
      console.log("fetching");
      fetchDetails(data)
        .then((res) => {
          if (res.data.token) {
            toggleAuth(!isAuth);
            setToken(res.data.token);
          }
        })
        .catch((err) => {
          alert("Wrong Credidentials");
        });
    } else {
      toggleAuth(false);
    }
  };

  return (
    <AppContext.Provider value={[isAuth, handleToggle, token]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
