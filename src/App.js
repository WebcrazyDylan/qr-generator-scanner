import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import QRgen from "./pages/QRgenerator";
import QRscan from "./pages/QRscanner";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qr_generator">
                <QRgen />
              </Route>
              <Route path="/qr_scanner">
                <QRscan />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
