import React from "react";
const depts = [
  {
    value: "",
    label: "-- Select Department--",
  },
  {
    value: "CSE",
    label: "CSE",
  },

  {
    value: "ECE",
    label: "ECE",
  },
  {
    value: "MECH",
    label: "MECH",
  },
  {
    value: "AI",
    label: "AI",
  },
  {
    value: "DATAMINE",
    label: "DATAMINE",
  },
];
const selectOptions = depts.map(({ value, label }) => (
  <option key={value}> {label}</option>
));
class Form extends React.Component {
  state = {
    preferredContact: "",
  };
  clientName = React.createRef();
  company = React.createRef();
  title = React.createRef();
  department = React.createRef();
  preferredContact = React.createRef();
  email = React.createRef();
  tel = React.createRef();
  companyAddress = React.createRef();
  workingDays = React.createRef();
  workingHours = React.createRef();
  billingCycle = React.createRef();
  info = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      clientName: this.clientName.current.value,
      company: this.company.current.value,
      title: this.title.current.value,
      department: this.department.current.value,
      preferredContact: this.preferredContact.current.value,
      companyAddress: this.companyAddress.current.value,
      workingDays: this.workingDays.current.value,
      workingHours: this.workingHours.current.value,
      billingCycle: this.billingCycle.current.value,
      info: this.info.current.value,
    };
    if (this.state.preferredContact === "email") {
      data.email = this.email.current.value;
    }
    if (this.state.preferredContact === "phone") {
      data.tel = this.tel.current.value;
    }
    console.log(data);
    this.props.onSubmit(data);
  };
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ preferredContact: value });
  };
  render() {
    return (
      <div className="body">
        <h1>Client Details</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="firstName">
                <span>Client Name</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="text"
                name="ClientName"
                autoComplete="off"
                ref={this.clientName}
                required={true}
                minLength={3}
                maxLength={12}
              />
            </div>
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="company">
                <span>Company</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="text"
                name="company"
                autoComplete="off"
                ref={this.company}
                max={12}
                required={true}
              />
            </div>
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="title">
                <span>Title</span>
              </label>
              {/* </div> */}
              <input
                type="text"
                name="title"
                autoComplete="off"
                ref={this.title}
                max={50}
              />
            </div>
            <div className="select-container">
              {/* <div className="label"> */}
              <label htmlFor="department">
                <span>Department</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <select
                name="department"
                id="department"
                ref={this.department}
                required={true}
              >
                {selectOptions}
              </select>
            </div>
            <div className="radio-container">
              {/* <div className="label"> */}
              <label htmlFor="preferedContact">
                <span>Preferred Contact Method</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="radio"
                name="preferredContact"
                value="email"
                onChange={this.handleChange}
                ref={this.preferredContact}
                // checked={preferredContact === "email"}
              />
              <label htmlFor="preferredContact">Email</label>
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                ref={this.preferredContact}
                onChange={this.handleChange}
                // checked={preferredContact === "phone"}
              />
              <label htmlFor="email">Phone</label>
            </div>
            {this.state.preferredContact === "email" && (
              <div className="input-container">
                <label htmlFor="email">
                  <span>Email</span>
                  <em className="mandatory">*</em>
                </label>
                <input
                  type="email"
                  name="email"
                  required={true}
                  ref={this.email}
                  pattern="[a-z0-9.+-_%]+@[a-z]+.[a-z]{2,}$"
                  autoComplete="off"
                />
              </div>
            )}
            {this.state.preferredContact === "phone" && (
              <div className="input-container">
                <label htmlFor="tel">
                  <span>PhoneNumber</span>
                  <em className="mandatory">*</em>
                </label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                  ref={this.tel}
                  required={true}
                  autoComplete="off"
                  minLength={10}
                  pattern="[0-9]{10}"
                />
              </div>
            )}
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="companyAddress">
                <span>Company Address</span>
              </label>
              {/* </div> */}

              <input
                type="text"
                name="companyAddress"
                ref={this.companyAddress}
                placeholder="Address Line1"
                autoComplete="off"
                max={50}
              />
            </div>
            <div className="input-container">
              <label htmlFor="companyAddress"></label>
              <input
                type="text"
                name="companyAddress"
                ref={this.companyAddress}
                placeholder="address line2"
                autoComplete="off"
                max={50}
              />
            </div>
            <div className="input-container">
              <label htmlFor="companyAddress"></label>
              <input
                type="text"
                name="companyAddress"
                ref={this.companyAddress}
                placeholder="postal code"
                autoComplete="off"
                minLength={6}
                maxLength={6}
              />
            </div>
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="workingDays">
                <span>Working Days</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="number"
                name="workingDays"
                ref={this.workingDays}
                autoComplete="off"
                required={true}
                min={1}
                max={31}
              />
            </div>
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="workingHours">
                <span>Working Hours</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="number"
                name="workingHours"
                ref={this.workingHours}
                autoComplete="off"
                required={true}
                min={5}
                max={12}
              />
            </div>
            <div className="input-container">
              {/* <div className="label"> */}
              <label htmlFor="billingCycle">
                <span>Billing Cycle</span>
                <em className="mandatory">*</em>
              </label>
              {/* </div> */}
              <input
                type="number"
                name="billingCycle"
                ref={this.billingCycle}
                autoComplete="off"
                required={true}
                min={25}
                max={31}
              />
            </div>
            <div className="text-container">
              {/* <div className="label"> */}
              <label htmlFor="info">Additional Information</label>
              {/* </div> */}
              <textarea
                id="info"
                name="info"
                cols="120"
                rows="10"
                ref={this.info}
              />
            </div>
            <div className="btn-container">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
