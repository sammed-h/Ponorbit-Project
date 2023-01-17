import React, { useState } from "react";
import {
  GALLERY_PATH,
  POST_PATH,
  PROFILE_PATH,
  TO_DO,
} from "../Constants/Constants";
import Conatiner from "./Container/Container";
import "./Css/SideBar.css";
function SideBar() {
  const [array, setArray] = useState([
    {
      id: 1,
      name: "Profile",
      path: PROFILE_PATH,
    },
    {
      id: 2,
      name: "Posts",
      path: POST_PATH,
    },
    {
      id: 3,
      name: "Gallery",
      path: GALLERY_PATH,
    },
    {
      id: 4,
      name: "ToDo",
      path: TO_DO,
    },
  ]);
  const [indValue, setIndValue] = useState(0);
  const [path, setPath] = useState(PROFILE_PATH);

  return (
    <div>
      <div className="profileBase">
        <div className="sideDrawer">
          <nav className="navBar">
            {array?.map((ele, index) => {
              function handleNavigate() {
                setIndValue(index);
                setPath(ele.path);
              }
              return (
                <ul>
                  <li
                    className={`navLink ${indValue === index && "liActive"}`}
                    onClick={() => handleNavigate(index)}
                  >
                    <span
                      className={`navLink ${indValue === index && "active"}`}
                    >
                      {ele.name}
                    </span>
                  </li>
                  <hr className="hrLine" />
                </ul>
              );
            })}
          </nav>
        </div>
        <Conatiner path={path} />
      </div>
    </div>
  );
}

export default SideBar;
