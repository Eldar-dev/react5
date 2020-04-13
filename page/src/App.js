import React from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ErrorComponent from "./components/ErrorComponent";
import Service from "../src/service/service";

import "./App.css";

class App extends React.Component {
  state = { arrError: [] };

  service = new Service();

  transformerData = (userData) => {
    const arryNew = [];

    for (const key in userData) {
      const data = userData[key];

      for (const label in data) {
        arryNew.push(`${label} ${data[label]}`);

        this.setState({
          arrError: arryNew,
        });
      }
    }
  };

  onChangeForm = (userData) => {
    if (userData === undefined) {
      this.setState({
        arrError: [],
      });
      alert("Поздравляем! Вы зарегистрированы!");
    } else {
      this.transformerData(userData);
    }
  };

  onSubmit = (userData) => {
    return this.service.requestData(userData).then(this.onChangeForm);
  };

  render() {
    const errorMessage = this.state.arrError;

    return (
      <div className="app">
        <Header />
        <ErrorComponent errorMessage={errorMessage} />
        <InputForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
