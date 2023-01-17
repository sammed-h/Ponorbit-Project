import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./Components/ContextApi";
import SideBar from "./Components/SideBar";
import UserList from "./Components/UserList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const getUserList = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      const result = await response.data.users;
      setUsersData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <UserContext.Provider value={usersData}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/profile/:id" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
