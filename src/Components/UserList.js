import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/UserList.css";
import "./Css/CustomScrollbar.css";
import { UserContext } from "./ContextApi";
import { PUBLIC_ASSETS_PATH } from "../Constants/Constants";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const usersList = useContext(UserContext);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);
  const bgImage = {
    backgroundImage: `url(${PUBLIC_ASSETS_PATH}/waveBackground.png)`,
    objectFit: "fill",
  };

  return (
    <div style={bgImage}>
      <div className="wrapper">
        <div className="userListTitle"> Select an account</div>
        <div className="userListWrapper">
          <div className="userListContainer">
            {users?.map((user) => {
              return (
                <div
                  className="userList"
                  key={user.id}
                  onClick={() => {
                    navigate(`/profile/${user.id}`);
                  }}
                >
                  <div className="userProfileImg">
                    <img src={`${user.profilepicture}`} alt="User profile" />
                  </div>
                  <div> {user.name} </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
