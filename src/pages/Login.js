import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";
import { post } from "../functions/functions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPasword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    let userID;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((data) => {
        post("users", data.user.uid, {
          displayName: username, // first name for now
          email: registerEmail,
          gameIDs: [],
          startDate: new Date(),
        });
        userID = data.user.uid;
      });
      console.log(user);
      navigate(`/my-dashboard:${userID}`);
    } catch (err) {
      alert(err.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          placeholder="Email..."
          onChange={(e) => setRegisterEmail(e.target.value)}
          value={registerEmail}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setRegisterPasword(e.target.value)}
          value={registerPassword}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Login;
