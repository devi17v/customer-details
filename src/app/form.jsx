import React from "react";
import "./app.css";
const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "India",
    label: "India",
  },

  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];
const selectOptions = options.map(({ value, label }) => (
  <option key={value}> {label}</option>
));
class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    dateOfBirth: "",
    weight: "",
    height: "",
    country: "",
    gender: "",
    movies: {
      thriller: false,
      family: false,
      biography: false,
    },
    bio: "",

    submitted: false,
    touched: {
      firstName: false,
      lastName: false,
    },
  };

  handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      this.setState({
        movies: { ...this.state.movies, [name]: checked },
      });
    } else if (type === "file") {
      this.setState({
        [name]: e.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      country,
      gender,
      movies,
      bio,
    } = this.state;
    const formattedMovies = [];
    for (const key in movies) {
      if (movies[key]) {
        formattedMovies.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      country,
      gender,
      movies: formattedMovies.join(", "),
      bio,
    };
    console.log(data);
    this.props.onSubmit(data);
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      weight,
      height,
      gender,
      bio,
    } = this.state;

    return (
      <div className="body">
        <h1>Customer Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="firstName">
                <span>FirstName</span>
                <em className="mandatory">*</em>
              </label>

              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                minLength={3}
                maxLength={12}
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">
                <span>Email</span>
                <em className="mandatory">*</em>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="aaaa@dnsc.com"
                required={true}
                pattern="[a-z0-9.+-_%]+@[a-z]+.[a-z]{2,}$"
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="tel">
                <span>PhoneNumber</span>
                <em className="mandatory">*</em>
              </label>
              <input
                type="tel"
                name="tel"
                value={tel}
                onChange={this.handleChange}
                placeholder="Phone Number"
                required={true}
                autoComplete="off"
                minLength={10}
                //maxLength={10}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="input-container">
              <label htmlFor="dateOfBirth">DOB</label>
              <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={this.handleChange}
                placeholder="Date Of Birth"
                required={true}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={this.handleChange}
                placeholder="Weight in KG"
                minLength={5}
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="height">Height</label>
              <input
                type="number"
                name="height"
                value={height}
                onChange={this.handleChange}
                placeholder="Height in ft"
                minLength={2}
                autoComplete="off"
              />
            </div>
            <div className="select-container">
              <label htmlFor="country">
                <span>Country</span>
                <em className="mandatory">*</em>
              </label>
              <select
                name="country"
                required
                onChange={this.handleChange}
                id="country"
              >
                {selectOptions}
              </select>
            </div>
            <div className="radio-container">
              <label htmlFor="gender">Gender</label>
              <div className="male-radio">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                  checked={gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female-radio">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                  checked={gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="other-radio">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={this.handleChange}
                  checked={gender === "other"}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="checkBox-container">
              <fieldset>
                <legend>What Type Of Movies Do You Like?</legend>

                <input
                  type="checkbox"
                  name="thriller"
                  value="thriller"
                  onChange={this.handleChange}
                />
                <label htmlFor="animation">Thriller Movies</label>

                <input
                  type="checkbox"
                  name="family"
                  value="family"
                  onChange={this.handleChange}
                />
                <label htmlFor="family">Family Movies</label>

                <input
                  type="checkbox"
                  name="biography"
                  value="biography"
                  onChange={this.handleChange}
                />
                <label htmlFor="biography">Biography Movies</label>
              </fieldset>
            </div>
            <div className="text-container">
              <label htmlFor="bio">About yourself</label> <br />
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={this.handleChange}
                cols="120"
                rows="10"
                placeholder="Write about yourself ..."
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
