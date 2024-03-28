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
import dashboard from "./Pages/dashboard";
import flights from "./Pages/flights";
import reports from "./Pages/reports";
import settings from "./Pages/settings";
import statistics from "./Pages/statistics";
import wallet from "./Pages/wallet";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />}>
          <Route path="/landing/dashboard" element={dashboard} />
          <Route path="/landing/flights" element={flights} />
          <Route path="/landing/reports" element={reports} />
          <Route path="/landing/settings" element={settings} />
          <Route path="/landing/statistics" element={statistics} />
          <Route path="/landing/wallet" element={wallet} />
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
