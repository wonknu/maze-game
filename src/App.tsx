import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: monospace;
    font-weight: bold;
  }
`;

const Home = lazy(() => import('./Pages/Home'));
const Game = lazy(() => import('./Pages/Game'));
const Settings = lazy(() => import('./Pages/Settings'));

const App: React.FC = () => (
  <>
    <Reset />
    <GlobalStyle />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default App;