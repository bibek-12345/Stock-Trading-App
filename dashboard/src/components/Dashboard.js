import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    const tokenFromStorage = localStorage.getItem("token");

    // If token comes from URL → save it
    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);

      // clean URL (remove ?token=...)
      window.history.replaceState({}, document.title, "/");
      return;
    }

    // If NO token anywhere → redirect to login
    if (!tokenFromStorage) {
      window.location.href = process.env.REACT_APP_FRONTEND_URL;
    }
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
