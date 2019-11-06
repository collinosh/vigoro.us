import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Template from "./common/components/Template";

import routes from "./common/constants/routes";
import PageNotFound from "./pages/PageNotFound";
 
import "./common/stylesheets/Styling.scss";

const App = () => {
  return (
    <Router>
        <Template>
          <Switch>
            {routes.map(route=> {
                return(<Route exact path={route.path} component={route.component} />)
            })
            }
            <Route component={PageNotFound} />
          </Switch>
        </Template>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();