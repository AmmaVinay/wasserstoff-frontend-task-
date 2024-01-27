import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
         <Routes>
         <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
