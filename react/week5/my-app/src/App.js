import React from "react";
import "./App.css";
import context from "./context";
import ShowData from "./components/ShowData";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
//import Profile from "./components/Profile";

const ContextProvider = context.Provider;

/******************/
function fetchUsers(inputValue) {
  const URL = `https://api.github.com/search/users?q=${inputValue}`;
  return fetch(URL).then((res) => res.json());
}
/******************/

class App extends React.Component {
  state = {
    users: [],
    inputValue: "",
    isLoading: true,
  };
  /******************/

  handelUserSearch = (e) => {
    const inputValue = this.state.inputValue;
    if (inputValue) {
      fetchUsers(inputValue)
      .then((body) => {
        this.setState({
          users: body.items,
          isLoading: false,
        });
      });
    }

    this.setState({ 
      inputValue: e.target.value,
        });
  };

  render() {
    const contextValue = {
      users: this.state.users,
      inputValue: this.state.inputValue,
      isLoading: this.state.isLoading,
    };

    return (
      <ContextProvider value={contextValue}>
        <BrowserRouter>
         <Switch>
              <div f>
                <h1>Github users search App.</h1>
                <input
                  type="text"  placeholder="search for user"    onChange={this.handelUserSearch}  />
              <ShowData />
              </div> 
    
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    );
  }
}

export default App;
