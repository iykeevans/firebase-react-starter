import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    await createUserWithEmailAndPassword(auth, user.email, user.password)
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
        {isSubmitting ? "Signing up..." : "Sign up"}
      </button>
    </div>
  );
};

export default SignUp;
