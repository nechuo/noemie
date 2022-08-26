import "./index.css";
import React from "react";
import data from "./data";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { render } from "react-dom";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route
          path="/contact"
          element={<Contact header={data.header} contact={data.contact} />}
        />
        <Route
          path="/about"
          element={<About header={data.header} about={data.about} />}
        />
        {data.sections.map((section) =>
          section.experiences.map((experience) => (
            <Route
              path={experience.name.replace(" ", "_")}
              element={<Details experience={experience} header={data.header} />}
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  container
);
