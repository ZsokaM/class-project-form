import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";

import Navbar from "./components/constant-elements/Nav";
import Footer from "./components/constant-elements/Footer";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Form from "./Pages/ComplaintForm";
import CardOverview from "./Pages/ComplaintOverview";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { userContext } from "./components/Context";

function App() {
  const userIsLoggedIn = useContext(userContext);
  const [theme, setTheme] = useState<string>("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <button onClick={toggleTheme}>Light/Dark</button>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {userIsLoggedIn ? (
                <>
                  <Route path="/form">
                    <Form />
                  </Route>
                  <Route path="/overview">
                    <CardOverview />
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                </>
              )}
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    
  );
}

export default App;
