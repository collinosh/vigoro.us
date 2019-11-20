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
          <Switch>
            {routes.map(route=> {
                return(
                <Route exact path={route.path} render={
                  () => route.hasTemplate ? 
                  <Template><route.component/></Template>
                  : <route.component/>
              } />)
            })}
            <Route render={()=><Template><PageNotFound/></Template>} />
          </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
