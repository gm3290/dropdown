import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout";

import { HomePage } from "./home";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
