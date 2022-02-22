import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import { createContext, useEffect, useState } from "react";
import AllCourses from "./components/AllCourses/AllCourses";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

export const DataContext = createContext();

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, [])

  return (
    <div className="bg-success bg-gradient bg-opacity-10">
      <DataContext.Provider value={data}>
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
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
