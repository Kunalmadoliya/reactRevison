import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";

import {login, logout} from "./store/authSlice";

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout({userData}));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <div>hi</div> : null;
};

export default App;
