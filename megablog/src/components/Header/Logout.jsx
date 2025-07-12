import useDispatch from "react-redux";
import authService from "../../appwrite/auth";
import {logout} from "../../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={ logouthandler}>Logout</button>
    </>
  );
};

export default Logout;
