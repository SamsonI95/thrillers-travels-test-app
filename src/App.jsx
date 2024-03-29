//App
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

//Style
import "./App.css";


//Page(s)
import Landing from "./Landing";
import Dashboard from "./Pages/Dashboard";
import Flights from "./Pages/Flights";
import Reports from "./Pages/Reports"
import Wallet from "./Pages/Wallet";
import Statistics from "./Pages/Statistics";
import Settings from "./Pages/Settings";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />}>
          <Route path="/landing/dashboard" element={<Dashboard />} />
          <Route path="/landing/flights" element={<Flights />} />
          <Route path="/landing/reports" element={<Reports />} />
          <Route path="/landing/settings" element={<Settings />} />
          <Route path="/landing/statistics" element={<Statistics />} />
          <Route path="/landing/wallet" element={<Wallet />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
