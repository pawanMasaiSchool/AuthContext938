import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

export default function Body() {
  const [isAuth, handleToggle, token] = useContext(AppContext);
  return (
    <>
      {isAuth ? (
        <div>
          Welcome to Context API session, your token is <h2>{token}</h2>{" "}
        </div>
      ) : (
        <>
          <div>Please Login</div>
          <br />
          <div>
            To Login Use "email" as "eve.holt@reqres.in" and password as
            "cityslicka"
          </div>
        </>
      )}
    </>
  );
}
