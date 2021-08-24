import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/product">
            <ProductPage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;