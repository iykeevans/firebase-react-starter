import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
