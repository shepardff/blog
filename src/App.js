import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
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
                        <Route exact path="/blog" component={ Blog } />
                        <Route exact path="/contacts" component={ Contacts } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;