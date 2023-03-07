import NavBar from "./NavBar"
import Homepage from "./Homepage"
import { Route, Switch } from "react-router-dom";
import NewForm from "./NewForm";
import About from "./About";

function App() {
  return (
    <div className="App container">
      <div className="row">
        APP
        <NavBar />
      </div>
      <Switch>
         <Route exact path="/">
            <div className="row">
              <Homepage />
            </div>
         </Route>
         <Route path="/newform">
            <div className="row">
              <NewForm />
            </div>
         </Route>
         <Route path="/about">
            <div className="row">
              <About />
            </div>
         </Route>
      </Switch>
    </div>
  );
}

export default App;

