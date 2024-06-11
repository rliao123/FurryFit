import React, { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Results from "./pages/Results";

function App() {
  const action = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    // eslint-disable-next-line default-case
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form-results" element={<Results />} />
    </Routes>
  );
}

export default App;
