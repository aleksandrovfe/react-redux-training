import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Users from "./components/Users/Users";

function App() {
    return (
        <div className="">
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Users />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
