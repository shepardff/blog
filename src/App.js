import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/about" component={ About } />
                        <Route exact path="/contacts" component={ Contacts } />
                        <Route exact path="/category/:category" component={ Home } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;