import React, { useContext, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useParams } from "react-router-dom";
import { UserContext } from "./ContextApi";
import UserProfileModal from "./UserProfileModal";
import "./Css/Post.css";
function Post() {
  const { id } = useParams();
  const usersData = useContext(UserContext);
  const [users, setUsers] = useState([]);
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
          <div className="postContent">
            <>
              <div className="postHeader">
                <label className="postText"> Post </label>
                <div
                  className="topLeftPost"
                  onClick={() => {
                    setShowUserModal(true);
                  }}
                >
                  <img
                    src={`${user.profilepicture}`}
                    className="topPostImg"
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
              <div className="postContainer">
                <span> Coming Soon </span>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
