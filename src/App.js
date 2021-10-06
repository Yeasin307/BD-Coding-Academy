import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
import AllCourses from "./components/AllCourses/AllCourses";
import Error from "./components/Error/Error";

export const dataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
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
