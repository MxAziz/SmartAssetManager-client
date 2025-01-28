import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const Profile = {
      displayName: name,
    };

    updateProfile(auth.currentUser, Profile)
      .then(() => {
        // console.log("profile update successful");
        navigate("/profile");
        toast.success("Your profile is up to date !");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-10">
      <div className="hero-content flex-col">
        <div className="text-4xl font-bold text-center mb-6">
          Update Your Profile
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-wide bg-[#753165] hover:bg-[#190714] text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
