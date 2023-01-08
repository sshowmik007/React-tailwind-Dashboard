import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip, Button } from "@material-tailwind/react";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

function App() {
  const activeMenu = false;
  return (
    <div className=" App">
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-gray-900">
            <div
              className="fixed right-4 bottom-4 z-auto"
              // style={{ zIndex: "1000" }}
            >
              <Tooltip content="Settings" placement="left-end">
                {/* setting button Dynamic */}
                <Button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-lg hover:bg-gray-100 text-white"
                  style={{ background: "purple", borderRadius: "50%" }}
                >
                  <FiSettings />
                </Button>
              </Tooltip>
            </div>
            {/* active menu */}
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-gray-700 bg-white">
                <Sidebar />
              </div>
            ) : (
              // not active
              <div className="w-0 dark:bg-gray-700">
                <Sidebar />
              </div>
            )}
            {/* for navigation BAR */}
            <div
              className={
                activeMenu
                  ? "dark:bg-white bg-white min-h-screen md:ml-72 w-full"
                  : "dark:bg-white bg-white min-h-screen  w-full flex-1"
              }
            >
              <div className="fixed md:static bg-slate-100 dark:bg-gray-700 navbar w-full">
                <Navbar />
              </div>
            </div>

            {/* Routing */}
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
