import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/teach" component={TeacherList} />
    </BrowserRouter>
  );
}

export default Router;
