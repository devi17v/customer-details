import React from "react";
import Success from "./success";
import Form from "./form";
import "./app.css";
import FormRef from "./form-ref";

class App extends React.Component {
  state = {
    submitted: false,
    data: {},
    formType: "",
  };

  handleSubmit = (data) => {
    this.setState({ submitted: true, data });
  };
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ formType: value });
  };

  render() {
    const { submitted, data } = this.state;

    const formTy = this.state.formType === "formWithReact" && (
      <Form onSubmit={this.handleSubmit} />
    );
    const formRef = this.state.formType === "formWithRef" && (
      <FormRef onSubmit={this.handleSubmit} />
    );
    return (
      <div className="app-container">
        <h1>React Form</h1>
        <div className="radio-container">
          <label htmlFor="formType">Form Type</label>
          <div className="react-radio">
            <input
              type="radio"
              name="formWithReact"
              value="formWithReact"
              onChange={this.handleChange}
            />
            <label htmlFor="form-react">form-react</label>
          </div>
          <div className="ref-radio">
            <input
              type="radio"
              name="formWithReact"
              value="formWithRef"
              onChange={this.handleChange}
            />
            <label htmlFor="form-ref">Form-ref</label>
          </div>
        </div>

        {submitted ? (
          <Success data={data} />
        ) : (
          <>
            {formTy}
            {formRef}
          </>
        )}
      </div>
    );
  }
}
export default App;
