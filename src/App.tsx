import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import Confirm from "./components/confirm";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "Please hit the confirm button",
    };
  }

  public render() {
    return (
      <>
        <div className="App">
          <p>{this.state.confirmMessage}</p>
          <button onClick={this.handleConfirmClick}>Confirm</button>
          <Confirm
            open={this.state.confirmOpen}
            title="React and TypeScript"
            content="Are you sure you want to learn React and TypeScript?"
            cancelCaption="No way"
            okCaption="Yes please!"
            onCancelClick={this.handleCancelConfirmClick}
            onOkClick={this.handleOkConfirmClick}
          />
        </div>
      </>
    );
  }

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
  };

  private handleCancelConfirmClick = () => {
    this.setState({
      confirmMessage: "Take a break, I'm sure you will later ...",
      confirmOpen: false,
    });
  };

  private handleOkConfirmClick = () => {
    this.setState({
      confirmMessage: "Cool, carry on reading!",
      confirmOpen: false,
    });
  };
}

export default App;
