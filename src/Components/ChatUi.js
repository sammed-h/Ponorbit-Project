import React, { useContext, useEffect, useRef, useState } from "react";
import { PUBLIC_ASSETS_PATH } from "../Constants/Constants";
import { UserContext } from "./ContextApi";
import "./Css/ChatUi.css";
function ChatUi() {
  const [users, setUsers] = useState([]);
  const usersList = useContext(UserContext);
  const [activeUserList, setActiveUSerList] = useState(false);
  const [activeChatBox, setActiveChatBox] = useState(true);
  const [userChat, setUserChat] = useState("");
  const [message, setMessage] = useState([]);
  const input = useRef([]);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  function handleClose() {
    setUserChat("");
    setMessage([]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage([...message, input.current.value]);
    input.current.value = "";
    input.current.focus();
  };
  console.log("displayMessage", message);

  return (
    <div>
      {userChat && (
        <div className={`chatsLeft ${activeChatBox && "activeChatBox"}`}>
          <div className="chatsLeftHeader">
            <img
              src={`${userChat.profilepicture}`}
              alt="User profile"
              className="leftImg"
            />
            <span>{userChat.name} </span>
            <img
              src={PUBLIC_ASSETS_PATH + "/arrow.png"}
              className={`leftarrow ${activeChatBox && "rotate"}`}
              onClick={() => setActiveChatBox(!activeChatBox)}
            />
            <img
              src={PUBLIC_ASSETS_PATH + "/close.png"}
              className="leftClose"
              onClick={handleClose}
            />
          </div>

          <div className="messageDiv">
            <div className="typedMsgs">
              {message &&
                message?.map((message, index) => (
                  <div key={index} className="viewWrapper">
                    <span className="messsageView">{message}</span>
                  </div>
                ))}
            </div>
            <form className="innnerMsgDiv" onSubmit={handleSubmit}>
              <input type="text" className="chatInput" ref={input} />
              <button type="submit">
                <img
                  src={PUBLIC_ASSETS_PATH + "/send.png"}
                  className="sendImg"
                />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className={`chatsWrapper ${activeUserList && "activeUserList"}`}>
        <div className="chatHeader">
          <img src={PUBLIC_ASSETS_PATH + "/message.png"} />
          <span>Chats</span>
          <img
            src={PUBLIC_ASSETS_PATH + "/arrow.png"}
            className={`arrow ${activeUserList && "rotate"}`}
            onClick={() => setActiveUSerList(!activeUserList)}
          />
        </div>
        <div className="chatLists">
          {users?.map((user) => {
            return (
              <div
                className="userChatList"
                key={user.id}
                onClick={() => setUserChat(user)}
              >
                <div className="userChatImg">
                  <img src={`${user.profilepicture}`} alt="User profile" />
                </div>
                <div> {user.name} </div>
                <span className="activeDot"></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatUi;
