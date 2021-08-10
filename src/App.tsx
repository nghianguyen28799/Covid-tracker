import React from "react";

import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import WorldScreen from "./page/WorldScreen/WorldScreen";
import Helmet from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import VietnamScreen from "./page/VietnamScreen/VietnamScreen";
import NotFound from "./page/NotFound/NotFound";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Helmet>
          <title>Covid-19 Tracker</title>
        </Helmet>
        <Router>
          <Switch>
            <Route path="/in-the-world" exact={true}>
              <WorldScreen />
            </Route>
            <Route path="/vietnam" exact={true}>
              <VietnamScreen />
            </Route>
            <Route path="/" exact={true}>
              <Redirect to="/in-the-world" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
