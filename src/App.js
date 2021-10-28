import "./App.scss";
import Nav from "./components/nav/nav.component";
import { HomePage } from "./components/pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignInPage } from "./components/pages/sign-in-page/sign-in-page.component";
import { SignUpPage } from "./components/pages/sign-up-page/sign-up-page.component";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div id="page-content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/signin">
              <SignInPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
