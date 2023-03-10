import React from "react";
import Success from "./success";
import Form from "./form";
import "./app.css";

class App extends React.Component {
  state = {
    submitted: false,
    data: {},
  };

  handleSubmit = (data) => {
    this.setState({ submitted: true, data });
  };

  render() {
    const { submitted, data } = this.state;

    return (
      <div className="app-container">
        {submitted ? (
          <Success data={data} />
        ) : (
          <Form onSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}
export default App;
