import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import GoogleLogin from "react-google-login"; // Import Google login component

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  const responseGoogle = (response) => {
    try {
      if (response.error) {
        console.error('Google login error:', response.error);
        // Handle Google login error if needed
      } else {
        console.log(response); // Handle the Google login response here
        const user = {
          email: response.profileObj.email,
          // Add more fields if needed from the response
        };
        dispatch(loginUser(user)); // Dispatch action to log in the user
      }
    } catch (error) {
      console.error('Error while handling Google login:', error);
      // Handle error or show a friendly message to the user
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <form>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button onClick={login} className="btn mt-3 mb-3">
              Login
            </button>
            <br />
            <GoogleLogin
              clientId="925060961358-01u1kgktag1nni3sakfn7hqt6p5f6fj4.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle} // Handle failure if needed
              cookiePolicy={"single_host_origin"}
            />
            <br />
            <a style={{ color: 'black' }} href="/register" className="m-2">
              Click here to Register
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
