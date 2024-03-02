import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const getUserData = (accessToken?: string) => {
    if (!accessToken) throw new Error("Login failed");
    return fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    );
  };

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        console.log(credential);

        return getUserData(credential?.accessToken).then((res) => res.json());
      })
      .then((res) => console.log("-------->", res))
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => alert(error.message))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="text"
          value={user.email}
          onChange={(e) =>
            setUser((state) => ({ ...state, email: e.target.value }))
          }
        />
      </label>

      <br />

      <label>
        Password:
        <input
          type="text"
          value={user.password}
          onChange={(e) =>
            setUser((state) => ({ ...state, password: e.target.value }))
          }
        />
      </label>

      <br />

      <button onClick={handleSubmit}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      <button onClick={handleLoginWithGoogle}>Login with google</button>
    </div>
  );
};

export default Login;
