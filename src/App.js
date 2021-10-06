import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import { createContext, useEffect, useState } from "react";
import AllCourses from "./components/AllCourses/AllCourses";
import Error from "./components/Error/Error";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

export const dataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, [])
  return (
    <div className="bg-success bg-gradient bg-opacity-10">
      <dataContext.Provider value={[data, setData]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <AllCourses></AllCourses>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
