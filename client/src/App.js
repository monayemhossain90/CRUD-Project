import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route exact path = "/" render={(props)=><ReadPage {...props} key ={Date.now()} />}  />
          <Route exact path="/create" render={(props)=><CreatePage {...props} key ={Date.now()} />}  />
          <Route exact path="/update/:id" render={(props)=><UpdatePage {...props} key ={Date.now()} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
