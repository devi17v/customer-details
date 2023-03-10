import React from "react";

class Success extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="success-container">
        <h1>Form successfully submited</h1>
        <div className="display-customer-details">
          {Object.entries(data).map((d) => (
            <div className="row" key={d[0]}>
              <div className="key-container">{d[0]}:</div>
              <div className="value-container">{d[1]}</div>

              {/* {d[0]} : {d[1]} */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Success;
