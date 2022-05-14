import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import TheHeader from "./components/TheHeader/TheHeader";
import MainPageView from "./views/MainPageView/MainPageView";
import PressButtonView from "./views/PressButtonView/PressButtonView";

function App() {
  return (
    <div className="App">
        <Router>
            <TheHeader>
                Sometext
            </TheHeader>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>

                    <Route exact path="/"
                           element={<MainPageView/>}
                    >
                    </Route>
                    <Route path="/main"
                           element={<MainPageView/>}
                    >
                    </Route>
                    <Route path="/button"
                           element={<PressButtonView/>}
                    >
                    </Route>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
