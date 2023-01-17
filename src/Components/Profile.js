import React, { useContext, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useParams } from "react-router-dom";
import { UserContext } from "./ContextApi";
import "./Css/Profile.css";
import UserProfileModal from "./UserProfileModal";
function Profile() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const usersData = useContext(UserContext);
  const [showUserModal, setShowUserModal] = useState(false);
  const getParticularUser = users?.filter((data) => {
    if (data.id == id) {
      return data;
    }
  });

  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);

  return (
    <div>
      {getParticularUser?.map((user) => {
        return (
          <div className="profileContent">
            <div className="profileHeader">
              <label className="pText"> Profile </label>
              <div
                className="topLeftProfile"
                onClick={() => {
                  setShowUserModal(true);
                }}
              >
                <img
                  src={`${user.profilepicture}`}
                  className="topProfileImg"
                  alt=""
                />
                <span> {user.name} </span>
              </div>
            </div>
            {showUserModal && (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowUserModal(false);
                }}
              >
                <UserProfileModal user={getParticularUser} />
              </OutsideClickHandler>
            )}

            <div className="pContainer">
              <div className="pContentLeft">
                <img
                  src={`${user.profilepicture}`}
                  className="profileImg"
                  alt=""
                />
                <h3> {user.name} </h3>
                <div>
                  <div className="container">
                    <span className="label">Username : </span>
                    <span className="value"> {user.username} </span>
                  </div>
                  <div className="container">
                    <span className="label">Email : </span>
                    <span className="value"> {user.email} </span>
                  </div>
                  <div className="container">
                    <span className="label">Phone : </span>
                    <span className="value"> {user.phone} </span>
                  </div>
                  <div className="container">
                    <span className="label">Website : </span>
                    <span className="value">{user.website} </span>
                  </div>
                  <hr className="hrTwo" />
                  <div>
                    <label className="lCompany"> Company </label>
                    <div className="container">
                      <span className="label">Name : </span>
                      <span className="value"> {user.company.name} </span>
                    </div>
                    <div className="container">
                      <span className="label">catchPhrase : </span>
                      <span className="value">{user.company.catchPhrase}</span>
                    </div>
                    <div className="container">
                      <span className="label">bs : </span>
                      <span className="value">{user.company.bs}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pContentRight">
                <label className="lAddress"> Address :</label>
                <div className="containerRight">
                  <span className="labelRight">Street : </span>
                  <span className="valueRight"> {user.address.street} </span>
                </div>
                <div className="containerRight">
                  <span className="labelRight">Suite : </span>
                  <span className="valueRight"> {user.address.suite} </span>
                </div>
                <div className="containerRight">
                  <span className="labelRight">City : </span>
                  <span className="valueRight"> {user.address.city} </span>
                </div>
                <div className="containerRight">
                  <span className="labelRight">ZipCode : </span>
                  <span className="valueRight"> {user.address.zipcode} </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
