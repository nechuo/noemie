import "./index.css";
import "antd/dist/antd.min.css";
import initialData from "./data";
import { render } from "react-dom";
import Home from "./Pages/Home/Home";
import React, { useState } from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Details/Details";
import EditMode from "./Pages/EditMode/EditMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [siteContent] = useState(initialData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isEditMode={isEditMode}
              siteContent={siteContent}
              setIsEditMode={setIsEditMode}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              header={siteContent.header}
              contact={siteContent.contact}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About header={siteContent.header} about={siteContent.about} />
          }
        />
        <Route
          path="/edit"
          element={<EditMode setIsEditMode={setIsEditMode} />}
        />
        {siteContent.sections?.map((section) =>
          section?.experiences?.map((experience) => (
            <Route
              path={experience?.name?.replace(" ", "_")}
              element={
                <Details experience={experience} header={siteContent.header} />
              }
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
