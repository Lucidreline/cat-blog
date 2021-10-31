import "./App.scss";
import Nav from "./components/nav/nav.component";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./components/pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignInPage } from "./components/pages/sign-in-page/sign-in-page.component";
import { SignUpPage } from "./components/pages/sign-up-page/sign-up-page.component";

import { SERVER_URL } from "./config";

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const blogPostResults = await axios.get(`${SERVER_URL}/users/who-am-i`, {
        withCredentials: true,
      });
      if ("" === blogPostResults.data) setCurrentUser(null);
      else setCurrentUser(blogPostResults.data);
    };
    fetchData();
  }, []);
  return (
    <Router>
      <div className="app">
        <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div id="page-content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/signin">
              <SignInPage setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/signup">
              <SignUpPage setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
