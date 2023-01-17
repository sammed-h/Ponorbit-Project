import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/UserProfileModal.css";
const UserProfileModal = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      {user?.map((data) => {
        return (
          <div className="userProfileModalWrapper">
            <div className="userProfileModalPicture">
              <img src={`${data.profilepicture}`} alt="user modal" />
            </div>
            <div className="userProfileModalInfo">
              <div className="userProfileName"> {data.name} </div>
              <div className="userProfileEmail"> {data.email} </div>
            </div>
            <div>
              <button className="signOut" onClick={() => navigate("/")}>
                {" "}
                Sign out{" "}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserProfileModal;
