import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//componentes
import Header from "./componentes/Header";
import Lateral from "./componentes/Lateral";
import Photos from "./componentes/Photos";
import NewPhoto from "./componentes/NewPhoto";
import Albums from "./componentes/Albums";
import Album from "./componentes/Album";
import NewAlbum from "./componentes/NewAlbum";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row">
            <div className="container-fluid">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-1 d-none d-md-block bg-light">
              <Lateral />
            </div>
            <div className="container col-11 contenidoapp">
              <Switch>
                <Route exact path="/" component={Photos} />
                <Route exact path="/photo/new" component={NewPhoto} />
                <Route exact path="/albums" component={Albums} />
                <Route exact path="/album/new" component={NewAlbum} />
                <Route exact path="/album/:id" component={Album} />
              </Switch>
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
