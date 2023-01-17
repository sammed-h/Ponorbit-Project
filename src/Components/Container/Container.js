import React from "react";
import {
  GALLERY_PATH,
  POST_PATH,
  PROFILE_PATH,
  TO_DO,
} from "../../Constants/Constants";
import ChatUi from "../ChatUi";
import Gallery from "../Gallery";
import Post from "../Post";
import Profile from "../Profile";
import ToDo from "../ToDo";

function Container({ path }) {
  return (
    <>
      <ChatUi />
      {(() => {
        switch (path) {
          case PROFILE_PATH:
            return <Profile />;
          case POST_PATH:
            return <Post />;
          case GALLERY_PATH:
            return <Gallery />;
          case TO_DO:
            return <ToDo />;
          default:
            return null;
        }
      })()}
    </>
  );
}

export default Container;
